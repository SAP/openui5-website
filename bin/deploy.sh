#!/bin/bash

set -e # Exit with nonzero exit code if anything fails

PROJECT_NAME=`basename $PWD`
REPOSITORY_URL=`git config --get remote.origin.url`
SOURCE_REPO_DIR=$PWD
SOURCE_BRANCH=$TRAVIS_BRANCH
TARGET_BRANCH="gh-pages"

# Default directory: /home/travis/build/{UserId}/{RepositoryName}, e.g. /home/travis/build/D068547/openui5.org
cd ..
HOME_DIR=$PWD # E.g. /home/travis/build/D068547/

# Clone target branch
TARGET_REPO_DIR="${HOME_DIR}/${PROJECT_NAME}_${TARGET_BRANCH}" # E.g. /home/travis/build/D068547/openui5.org_gh-pages
git clone --depth=1 --branch=$TARGET_BRANCH $REPOSITORY_URL $TARGET_REPO_DIR
cd $TARGET_REPO_DIR

# E.g. /home/travis/build/D068547/openui5.org_gh-pages/feature_branch/
SOURCE_DIR="${SOURCE_REPO_DIR}/build"
TARGET_DIR="${TARGET_REPO_DIR}/${SOURCE_BRANCH}"

# Erase target folder:
rm -rf $TARGET_DIR

# Move built assets:
mv $SOURCE_DIR $TARGET_DIR

# Create index.html with branches list (simplify navigation)
${SOURCE_REPO_DIR}/bin/createDirectoryIndex.sh

# Commit changes:
git config user.name "UI5.Bot"
git config user.email "noreply@sap.com"
git add .
git status

if [[ -n $(git status -s) ]]
then
	git commit -m "Deploy to GitHub Pages (Build #${TRAVIS_BUILD_ID})"
	git push origin $TARGET_BRANCH
	echo "DEPLOY SUCCESSFULLY COMPLETED!"
else
	echo "NO CHANGES! DEPLOY WAS SKIPPED"
fi
