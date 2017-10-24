[![travis][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://travis-ci.org/rautio/npm-module-es6-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.org/rautio/npm-module-es6-boilerplate
[coveralls-image]:https://coveralls.io/repos/github/rautio/npm-module-es6-boilerplate/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/rautio/npm-module-es6-boilerplate?branch=master
[npm-image]: https://img.shields.io/npm/v/npm-module-es6-boilerplate.svg
[npm-url]: https://npmjs.org/package/npm-module-es6-boilerplate
[downloads-image]: https://img.shields.io/npm/dm/npm-module-es6-boilerplate.svg
[downloads-url]: https://npmjs.org/package/npm-module-es6-boilerplate

Boilerplate structure to start writing an npm module using es6.

## Features:
* Transpile with [babel](https://babeljs.io/) (ES6 to ES5)
* Build with [webpack](https://webpack.github.io/) (manage dev and build modes)
* Lint with [eslint](https://eslint.org/)
* Cover with [istanbul](https://istanbul.js.org/)
* Test with [mocha](https://mochajs.org/) and [expect](https://github.com/mjackson/expect)
* Test builds with [travis](https://travis-ci.org/)
* Automatically publish coverage with [coveralls](https://coveralls.io/) through travis


## Commands:
* `npm test` - Run tests using mocha.
* `npm run test:watch` - Run tests in watch mode.
* `npm run test:travis` - Run test command (specifically for travis builds).
* `npm run cover` - Run code coverage analysis using istanbul.
* `npm run coveralls` - 
* `npm run lint` - Run linting using eslint and the defined rules and settings in .eslintrc.
* `npm run lint:watch` - Run linting in watch mode.
* `npm run clean` - Remove the `lib/` folder.
* `npm run build`- Run the code transpilation and output an obfuscated `.min.js` file.
* `npm run dev` - Run the code transpilation, lint and test all in watch mode. Used while developing.
* `npm run prepublish` - Run a build. This automatically runs before publishing when you run `npm publish ./`
* `npm run doc` - Generate documentation using jsdoc from comments within the code

## Getting started:
1. Clone the git repository and remove the `.git` folder.
2. Replace the libary name 'npm-module-es6-boilerplate' with your own npm module name. Replace:
	* `package.json`: "Name", "main", "description", "author", "keywords", "repository" and any other tag values.
	* `webpack.config.js`: libraryName variable to match your module name from package.json
	* Replace the contents of `README.md` with descriptions of your module
3. Replace files in `src/` and `test/` with your own custom internal modules and tests.
4. `Npm publish ./`

## Motivation
Easy starting point for any npm module using es6.

## Contributors
If you are interested in contributing please contact oskari.rautiainen@gmail.com

## License

[MIT](https://vjpr.mit-license.org)