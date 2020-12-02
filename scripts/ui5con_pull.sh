#!/bin/bash

set -e # Exit with nonzero exit code if anything fails

if [ -z ${SSH_KEY_BASE64+x} ]; then
	echo "DEPLOY SKIPPED. Reason: env variable SSH_KEY_BASE64 is not set"
	exit 0
fi

if [ -z ${ENCRYPTION_LABEL+x} ]; then
	echo "DEPLOY SKIPPED. Reason: env variable ENCRYPTION_LABEL is not set"
	exit 0
fi

if [[ $DEPLOY_ENV != "production" ]]; then
	echo "UI5 pull resources is not supported in development repositories"
	exit 0;
fi

if [[ $TRAVIS_BRANCH != "master" ]]; then
	echo "DEPLOY SKIPPED. Reason: UI5 pull script should be triggered on master branch"
	exit 0
fi


PROJECT_NAME=`basename $PWD`
REPOSITORY_URL=`git config --get remote.origin.url`

# Default directory: /home/travis/build/{UserId}/{RepositoryName}, e.g. /home/travis/build/{UserId}/openui5-website
cd ..
HOME_DIR=$PWD # E.g. /home/travis/build/{UserId}/

# Source repository:
SOURCE_REPOSITORY_SSH="git@github.com:${UI5_PULL_SOURCE_REPOSITORY}.git"
SOURCE_BRANCH=$UI5_PULL_SOURCE_BRANCH
SOURCE_REPO_DIR="${HOME_DIR}/${UI5_PULL_SOURCE_REPOSITORY/\//_}_${SOURCE_BRANCH}"
SOURCE_DIR=$SOURCE_REPO_DIR

# Target repository:
TARGET_REPOSITORY_SSH=${REPOSITORY_URL/https:\/\/github.com\//git@github.com:}
TARGET_BRANCH="gh-pages"
TARGET_REPO_DIR="${HOME_DIR}/${PROJECT_NAME}_${TARGET_BRANCH}" # E.g. /home/travis/build/{UserId}/openui5-website_gh-pages
TARGET_DIR="${TARGET_REPO_DIR}/ui5con/${UI5_PULL_DESTINATION}"

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

# Clone target repository
git clone --depth=1 --branch=$TARGET_BRANCH $TARGET_REPOSITORY_SSH $TARGET_REPO_DIR

# Clone source repository
git clone --depth=1 --branch=$SOURCE_BRANCH $SOURCE_REPOSITORY_SSH $SOURCE_REPO_DIR

# Move sources
rm -rf $TARGET_DIR
mkdir -p $TARGET_DIR
mv ${SOURCE_DIR}/* ${TARGET_DIR}/

## Commit changes:
cd $TARGET_REPO_DIR
git config user.name "UI5.Bot"
git config user.email "noreply@sap.com"
git add .
git status

if [[ -n $(git status -s) ]]
then
	git commit -m "Automatic pull from external repository to GitHub Pages (Build ${TRAVIS_BUILD_ID})"
	git push origin $TARGET_BRANCH
	echo "DEPLOY SUCCESSFULLY COMPLETED!"
else
	echo "NO CHANGES! DEPLOY WAS SKIPPED"
fi
