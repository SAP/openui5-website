## Contributing

You only need to follow the installation instructions below if you want to contribute something.

### Requirements

You need to have the following tools installed:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) 8.x

### Installation
- Fork this repository.
- Clone the forked repository to your local machine.
- Set up the upstream repository to retrieve updates from the original repository to the fork:
	- Run `git remote add upstream git@github.com:SAP/openui5-website.git`
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