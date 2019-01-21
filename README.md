# Repository for OpenUI5 website

> This repository contains the source files for the [openui5.org](openui5.org) website of [OpenUI5](https://github.com/SAP/openui5) framework.

## Contributing

We welcome your contributions to our website. If you have a proposal you want to share with us, simply keep the following things in mind.

> You only need to follow the installation instructions below if you want to contribute something.

### Requirements

To make a contribution, you need to install the following

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) 8.x

### Installation
- Fork this repository.
- Clone the forked repository to your local machine.
- Set up the upstream repository to retrieve updates from the original repository to the fork:
	- Run `git remote add upstream git@github.com:SAP/openui5-website.git`.
- Install project dependencies. In the project folder:
	- Run `npm install`
- Start the web server:
	- Run `npm start`
- Open `http://localhost:3030`.

### Make Your Changes
- Make sure the `master` branch of your fork is up to date. On the `master` branch:
	- Run `git pull upstream master`
- Create a new branch from the latest `master`:
	- Run `git checkout -b the-feature-name`.
- Make your changes, and save your files.
- Commit and push your changes to the forked repository:
	- To commit, run `git add -A && git commit -m "Meaningful commit message"`
	- To push, run `git push`

### Create a Pull Request
Create a pull request from the feature branch of the forked repository to the master branch of the original repository. For more information, take a look at the [GitHub instructions](https://help.github.com/articles/creating-a-pull-request).

## Known Issues
There are no known major issues at the moment.

## Support
To report a bug on the website, please use the [GitHub issue tracker](https://github.com/SAP/openui5-website/issues). For other questions you can reach us in `#openui5_website` channel of the [OpenUI5 Community Slack](https://slackui5invite.herokuapp.com).

## License
Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE](/LICENSE) file.
