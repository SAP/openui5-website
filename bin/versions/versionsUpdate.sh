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
	echo "Automatic versions update is not supported in development repositories"
	exit 0;
fi

if [[ $TRAVIS_BRANCH != "master" ]]; then
	echo "DEPLOY SKIPPED. Reason: Versions update script should be triggered on master branch"
	exit 0
fi

REPO_DIR=$PWD # /home/travis/build/{UserId}/{RepositoryName}, e.g. /home/travis/build/{UserId}/openui5-website

cd ..

# Authentication:
echo $SSH_KEY_BASE64 | base64 -d > ./deploy_key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in ./deploy_key.enc -out ./deploy_key -d
chmod 600 ./deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

# Generate versions:
cd $REPO_DIR
yarn run updateVersions

## Commit changes:
git config user.name "UI5.Bot"
git config user.email "noreply@sap.com"
git add .
git status

if [[ -n $(git status -s) ]]
then
	git commit -m "Automatic versions information update (Build ${TRAVIS_BUILD_ID})"
	git push origin master
	echo "DEPLOY SUCCESSFULLY COMPLETED!"
else
	echo "NO CHANGES! DEPLOY WAS SKIPPED"
fi
