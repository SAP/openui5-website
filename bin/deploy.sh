#!/bin/bash

set -e # Exit with nonzero exit code if anything fails

shopt -s dotglob # Allow copy dot files

if [ -z ${SSH_KEY_BASE64+x} ]; then
	echo "DEPLOY SKIPPED. Reason: env variable SSH_KEY_BASE64 is not set"
	exit 0
fi

if [ -z ${ENCRYPTION_LABEL+x} ]; then
	echo "DEPLOY SKIPPED. Reason: env variable ENCRYPTION_LABEL is not set"
	exit 0
fi

PROJECT_NAME=`basename $PWD`
REPOSITORY_URL=`git config --get remote.origin.url`
REPOSITORY_SSH=${REPOSITORY_URL/https:\/\/github.com\//git@github.com:}
SOURCE_REPO_DIR=$PWD
SOURCE_BRANCH=$TRAVIS_BRANCH
TARGET_BRANCH="gh-pages"

# Default directory: /home/travis/build/{UserId}/{RepositoryName}, e.g. /home/travis/build/{UserId}/openui5-website
cd ..
HOME_DIR=$PWD # E.g. /home/travis/build/{UserId}/

# Authentication
echo $SSH_KEY_BASE64 | base64 -d > ./deploy_key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in ./deploy_key.enc -out ./deploy_key -d
chmod 600 ./deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

# Clone target branch
TARGET_REPO_DIR="${HOME_DIR}/${PROJECT_NAME}_${TARGET_BRANCH}" # E.g. /home/travis/build/{UserId}/openui5-website_gh-pages
git clone --depth=1 --branch=$TARGET_BRANCH $REPOSITORY_SSH $TARGET_REPO_DIR
cd $TARGET_REPO_DIR

SOURCE_DIR="${SOURCE_REPO_DIR}/public"

if [[ $DEPLOY_ENV = "production" ]]
then
	echo "PRODUCTION BUILD"

	if [[ $TRAVIS_BRANCH = "master" ]]
	then
		# Root folder of gh-pages
		TARGET_DIR=$TARGET_REPO_DIR

		# Remove all files except .git folder & preserved folders for the special projects
		find * .* -maxdepth 0 -type f -exec rm -rf {} +
		find * -maxdepth 0 -type d ! -name '.git' ! -name 'ui5con' ! -name 'ui5conblr' -exec rm -rf {} +
	else
		echo "DEPLOY SKIPPED. Reason: we do not deploy other than master branch in the original repository"
		exit 0
	fi
else
	echo "DEVELOPMENT BUILD"

	# E.g. /home/travis/build/{UserId}/openui5-website_gh-pages/feature_branch/
	TARGET_DIR="${TARGET_REPO_DIR}/${SOURCE_BRANCH}"

	BRANCHES=(`
		git ls-remote --heads origin |
		grep -oh "refs/heads/.*" |
		sed "s/refs\/heads\///g" |
		grep -v "gh-pages" |
		grep -v "${TRAVIS_BRANCH}"
	`)
	echo $BRANCHES

	TIMESTAMP=`date +%s`
	TMP_DIR="${HOME_DIR}/__tmp__${TIMESTAMP}"

	mkdir $TMP_DIR

	# Preserve folders with other branches elsewhere
	for i in "${BRANCHES[@]}"
	do
		if [ -d "$i" ]
		then
			echo "Preserve: ${i}"
			mv $i $TMP_DIR/
		fi
	done

	# Remove everything from gh-pages except .git folder
	git rm -rf .
	git clean -fxd

	# Restore preserved folders
	for i in "${BRANCHES[@]}"
	do
		if [ -d "$TMP_DIR/$i" ]
		then
			echo "Restore: ${TMP_DIR}/${i}"
			mv $TMP_DIR/$i ./
		fi
	done

	rm -rf $TMP_DIR

	# Update index.html with branches list (simplify navigation)
	${SOURCE_REPO_DIR}/bin/createDirectoryIndex.sh

	# Create target (in case of the development build this folder was removed on the previous steps)
	mkdir $TARGET_DIR
fi


# Move built assets:
mv $SOURCE_DIR/* $TARGET_DIR

# Commit changes:
git config user.name "UI5.Bot"
git config user.email "noreply@sap.com"
git add .
git status

if [[ -n $(git status -s) ]]
then
	git commit -m "Automatic deploy to GitHub Pages (Build ${TRAVIS_BUILD_ID})"
	git push origin $TARGET_BRANCH
	echo "DEPLOY SUCCESSFULLY COMPLETED!"
else
	echo "NO CHANGES! DEPLOY WAS SKIPPED"
fi
