![React-Base logo](./src/app/assets/images/react-base-logo.png)

# React-Base


![Build-Status](https://travis-ci.org/atSistemas/react-base.svg?branch=master)
![Build-Status](https://ci.appveyor.com/api/projects/status/github/atSistemas/react-base?branch=master&svg=true)
![Coverage](https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_91.svg)
![Dependencies](https://david-dm.org/atSistemas/react-base.svg)
![Dev-dependencies](https://david-dm.org/atSistemas/react-base/dev-status.svg)
![Npm-Version](https://img.shields.io/badge/npm-6.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

**A modular platform for Redux Isomorphic applications**

This repository is a modular abstraction to build a [ReactJS](https://facebook.github.io/react/) web application based on [Redux](http://redux.js.org/)  paradigm.
You can use it to quickly scaffold your React web application projects and development environments for these projects.

This seed should clarify how to wire up all the modules of your application, even when we understand that in some cases
there must be some changes needed by the structure to fit your needs correctly

## Overview

**React-Base** makes use of the latest tools to improve your workflow, and enables you to create future ready applications:

- [Redux](http://redux.js.org/) based architecture
- Isomorphic / Universal Javascript Apps
- Separate build configurations depending on target environment
- [Webpack](https://webpack.github.io/) for the build toolchain  
- Development & Production server using [express](https://github.com/expressjs/express) and [webpack-dev-server](https://webpack.github.io/)
- JSX and ES6 transpilation using [Babel](https://babeljs.io/)
- Hot Reload/Live Reload support for Js & Css using  [Webpack HMR](https://webpack.github.io/docs/hot-module-replacement.html)
- Container and component generators using [Yeoman](https://github.com/yeoman/yo)
- Persistent data modeling using [ImmutableJS](https://facebook.github.io/immutable-js/)
- [Mocha](https://mochajs.org/) as testing framework
- [Enzyme/JsDom](https://github.com/airbnb/enzyme) for unit/ui testing
- [Nyc](https://github.com/bcoe/nyc) for code coverage
- [CssModules](https://github.com/css-modules/css-modules) based
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


### Initializing development server

  Once all the dependencies are installed, you can run `$ npm run start` to initialize your development server using [webpack-dev-server](https://webpack.github.io/) express middleware.

  The dev server uses  [HMR](https://webpack.github.io/docs/hot-module-replacement.html) (Hot module replacement) that injects updated modules into the bundle in runtime. It's like LiveReload


## Architecture

React-base is based on [Redux](http://redux.js.org/)  paradigm so you can find all the typical entities of an Redux project like [reducers](http://redux.js.org/docs/basics/Reducers.html) , [store](http://redux.js.org/docs/basics/Store.html), [actions](http://redux.js.org/docs/basics/Actions.html) , etc.

There are two main folders:

* `src/base/` contains React-base platform bootstrapping code.

* `src/app/` is the place where to put your application source code.

React-base uses a "featured based" distribution, so all the necessary code for each page/features is located in its own folder inside containers folder as in `src/app/containers/myContainer`

A container is a React Component who contains other components, Redux entities, functions. Each container is self-contained and represents a feature like "clients" or "products" and it contains all the necessary stuff.
```
actions/
components/
models/
reducers/
types/
```
### Generating a new container

React-base uses Yeoman to generate new application containers or components.

To generate a new container run:

`$ npm run generate:container`

You'll be asked to provide a name for your container. After that, React-base will create all the necessary folder and file template structures you, and will rebuild the file indexes (routes, reducers, models, etc), so you don't have to worry about including all the required imports.

After that, you can access to your container from http://localhost:8000/myContainer

### Regenerating indexes

You can rebuild the file indexes (reducers, models and routes) running `$ npm run regenerate`

### Generating a new component

As with containers, React-base can automate components creation for you. To create a new component, just type:

`$ npm run generate:component`

Same as before, you will be asked for a component name, and after that React-base will do the rest, placing a component template under `app/components`, and rebuilding all the indexes.

## Distribution

You can generate a complete distribution source ready for production enviroments.

### Building your application

`$ npm run build` will create a minified version for your application, ready for production.

### Running production server

`$ npm run start:prod` will run production enviroment of your application serving content from dist directory.


## Testing your application

React base uses - [Enzyme](https://github.com/airbnb/enzyme) a testing utillity created by [Airbnb](https://github.com/airbnb/) for unit testing and Ui testing using [Airbnb](https://github.com/tmpvar/jsdom) so you can run your ui testing without a browser.

You can write your tests normally using Mocha and Chai for assertions.

### Running your tests

`$ npm run test` will perform your unit testing, or npm test:coverage to run your tests and display a code coverage report.

### Generating code coverage

React base uses [Nyc](https://github.com/bcoe/nyc) for code coverage and you can generate reports in console or icov/html format.

`$ npm run test` will perform your code coverage, generating an html report located in coverage/ folder.

## Contributing

Anyone and everyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md):

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## License

**React-Base** is available under the [MIT license](LICENSE).
