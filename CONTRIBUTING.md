## Contributing

If you have a proposal you want to share with us, follow the description below. You only need to follow the installation instructions if you want to contribute something.

### Requirements

You need to have the following tools installed:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) 8.x

### Installation
- Fork this repository.
- [Clone the forked repository](https://help.github.com/articles/cloning-a-repository/) to your local machine.
- Install project dependencies. In the project folder:
	- Run `npm install`
- Start the web server:
	- Run `npm start`
- Open `http://localhost:3030` (or `http://localhost:3030/index` on Windows)

### Make Your Changes
- Make sure the `master` branch of your fork is up to date by [syncing your fork](https://help.github.com/articles/syncing-a-fork/). 
- Create a new feature branch from the latest `master`:
	- Run `git checkout -b the-feature-name`.
- Make your changes, and save your files.
- Commit and push your changes to the forked repository:
	- To commit, run `git add -A && git commit -m "Meaningful commit message"`
	- To push, run `git push`

### Configuring Travis for a forked repository
This repository is already pre-configured to work with Travis CI. Therefore, it's not necessary to change any Travis configuration in the repository (e.g. .travis.yml file), but it's necessary to configure the Travis instance for the forked repository, so that it can pick up settings and start working properly:
- Create an account on [https://travis-ci.com/](https://travis-ci.com/) and activate Travis for the forked repository
- Install Travis CLI — https://github.com/travis-ci/travis.rb#installation and login into Travis via `travis login` command
- Generate SSH Key and add it to the repository — `https://github.com/< your_name >/openui5-website/settings/keys`
- While being in the repository folder run the following command to encrypt the generated SSH Key:
	`travis encrypt-file deploy_key`
	The result should be similar to this:
	```
	$ travis encrypt-file deploy_key
	encrypting deploy_key for pavelkornev/openui5-website
	storing result as deploy_key.enc
	storing secure env variables for decryption
	
	Please add the following to your build script (before_install stage in your .travis.yml, for instance):
	
	    openssl aes-256-cbc -K $encrypted_f66148c1ee0c_key -iv $encrypted_f66148c1ee0c_key -in super_secret.txt.enc -out super_secret.txt -d
	
	Pro Tip: You can add it automatically by running with --add.
	
	Make sure to add deploy_key.enc to the git repository.
	Make sure not to add deploy_key to the git repository.
	Commit all changes to your .travis.yml.
	```
	- Instead of adding this key into the repository (because it's obviously only yours key and we don't need this key in the main repository), we will add this key as a [Travis Environment variable](https://docs.travis-ci.com/user/environment-variables/) in the next steps.
	- Keep the encryption label, here "f66148c1ee0c".
- Encode the encrypted key with Base64:
	- OSX: `openssl base64 -in package.json | tr -d '\n'`
	- Windows: `...`
- Set 2 Travis environment variables:
	1. `travis env set ENCRYPTION_LABEL f66148c1ee0c` (replace the encryption label with yours!)
	2. `travis env set SSH_KEY_BASE64 <base64 encoded key goes here>`
- Check environment variables for the repository with `travis env list`. Example output:
	```
	$ travis env list
	# environment variables for pavelkornev/openui5-website
	encrypted_f66148c1ee0c_key=[secure]
	encrypted_f66148c1ee0c_iv=[secure]
	SSH_KEY_BASE64=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
	ENCRYPTION_LABEL=f66148c1ee0c
	```
- From now on, all feature branches of the forked repository will be deployed to gh-pages branch in a separate folder. Example:
	```
	For branch name `feature_name`
	Build resources — https://github.com/< your_name >/openui5-website/tree/gh-pages/feature_name/
	Live URL — https://< your_name >.github.io/openui5-website/feature_name/
	```


### Create a Pull Request
[Create a pull request](https://help.github.com/articles/creating-a-pull-request) from the feature branch of the forked repository to the master branch of the original repository.

We will review your changes and get back to you. 
