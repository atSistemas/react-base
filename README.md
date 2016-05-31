![React-Base logo](./src/assets/images/react-base-logo.png)

# React-Base
**A modular platform for Redux Isomorphic applications**

This repository is a modular abstraction to build a typical [ReactJS](https://facebook.github.io/react/) web application.
You can use it to quickly scaffold your React web application projects and development environments for these projects.

This seed should clarify how to wire up all the modules of your application, even when we understand that in some cases
there must be some changes needed by the structure to fit your needs correctly

## Getting Started

To get you started, you need to meet the prerequisites, and then follow the installation instructions.

### Prerequisites

React-Base makes use a number of NodeJS tools to initialize and test React-Base. You must have node.js and its package manager (npm) installed. You can get it from [nodejs.org](node).

### Installing

Using Node Package Manager:

`$ npm install react-base`

Or you can clone our Git repository:

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

Run `npm test` to perform your unit testing, or `npm test:coverage` to run your tests and display a code coverage report

### Building your application

`npm run build` will create a minified version for your application, ready for production.

## Overview

**React-Base** makes use of the latest tools to improve your workflow, and enables you to create future ready applications:

- JSX and ES6 transpilation using [Babel](https://babeljs.io/)
- Hot Reload support
- [PostCSS](http://postcss.org/) processing with isomorphic support, including support for *[future CSS features](http://cssnext.io/features/)*.
- Persistent data handling using [ImmutableJS](https://facebook.github.io/immutable-js/)
- [Webpack](https://webpack.github.io/) for the build toolchain
- [Mocha](https://mochajs.org/) for unit testing plus [nyc](https://github.com/bcoe/nyc) reporting

## Contributing

Anyone and everyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md):

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## License

**React-Base** is available under the [MIT license](LICENSE).
