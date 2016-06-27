![React-Base logo](./app/assets/images/react-base-logo.png)

# React-Base


![Build-Status](https://travis-ci.org/atSistemas/react-base.svg?branch=master)
![Coverage](https://coveralls.io/repos/github/atSistemas/react-base/badge.svg?branch=master)
![Dependencies](https://david-dm.org/atSistemas/react-base.svg)
![Dev-dependencies](https://david-dm.org/atSistemas/react-base/dev-status.svg)
![Npm-Version](https://img.shields.io/badge/npm-v6.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)

**A modular platform for Redux Isomorphic applications**

This repository is a modular abstraction to build a typical [ReactJS](https://facebook.github.io/react/) web application.
You can use it to quickly scaffold your React web application projects and development environments for these projects.

This seed should clarify how to wire up all the modules of your application, even when we understand that in some cases
there must be some changes needed by the structure to fit your needs correctly

## Overview

**React-Base** makes use of the latest tools to improve your workflow, and enables you to create future ready applications:

- Redux Based Architecture
- Isomorphic / Universal Javascript Apps
- Separate build configurations depending on target environment
- [Webpack](https://webpack.github.io/) for the build toolchain  
- Development & Production server using [express](https://github.com/expressjs/express) and [webpack-dev-server](https://webpack.github.io/)
- JSX and ES6 transpilation using [Babel](https://babeljs.io/)
- Hot Reload support for Js & Css
- Container and component generators using [Yeoman](https://github.com/yeoman/yo)
- Persistent data modeling using [ImmutableJS](https://facebook.github.io/immutable-js/)
- [Mocha](https://mochajs.org/) for unit testing
- [nyc](https://github.com/bcoe/nyc) for code coverage
- [PostCSS](http://postcss.org/) processing with isomorphic support.
- CSS Vars using [Cssnext](http://cssnext.io/)
- Code Linting using [Eslint](https://github.com/eslint/eslint)
- Css Linting using [CssLint](https://github.com/stylelint/stylelint)
- [Airbnb](https://github.com/airbnb/javascript/tree/master/react) React Style Guide


## Getting Started

To get you started, you need to meet the prerequisites, and then follow the installation instructions.

### Prerequisites

React-Base makes use a number of NodeJS tools to initialize and test React-Base. You must have node.js 5.0.0 at least, and its package manager (npm) installed. You can get it from [nodejs.org](node).

### Installing

You can clone our Git repository:

`$ git clone https://github.com/atSistemas/react-base.git`

This method requires Git to be installed on your computer. You can get it from
[here](http://git-scm.com).

### Wiring up your development environment

Setting up **React-Base** is as easy as running:

`$ npm install`

This command will install all the required dependencies and start your development server, which takes care of all the changes you make to your code and runs all the awesome stuff that ends with your code automagically transpiled and running on your browser.

Please note that `npm install` is only required on your first start, or in case of updated dependencies.

### Initializing the development server

 Once all the dependencies are installed, you can run `npm start` to initialize your development environment.

### Testing your application

Run `npm test` to perform your unit testing, or `npm test:coverage` to run your tests and display a code coverage report.

### Running development server

`npm run start` will run development enviroment of your application using [webpack-dev-server](https://webpack.github.io/) middleware.

### Running production server

`npm run start:prod` will run production enviroment of your application serving content from dist directory.

### Building your application

`npm run build` will create a minified version for your application, ready for production.


## Contributing

Anyone and everyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md):

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## License

**React-Base** is available under the [MIT license](LICENSE).
