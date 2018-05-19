[![travis][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

[travis-image]: https://travis-ci.org/rautio/npm-module-es6-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.org/rautio/npm-module-es6-boilerplate
[coveralls-image]:https://coveralls.io/repos/github/rautio/npm-module-es6-boilerplate/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/rautio/npm-module-es6-boilerplate?branch=master

Boilerplate structure to start writing an npm module using es6.

## Features:
* Transpile with [babel](https://babeljs.io/) (ES6 to ES5)
* Build with [webpack](https://webpack.github.io/) (manage dev and build modes)
* Lint with [eslint](https://eslint.org/)
* Test and coverage with [jest](https://facebook.github.io/jest/)
* Test builds with [travis](https://travis-ci.org/)
* Automatically publish coverage with [coveralls](https://coveralls.io/) through travis


## Commands:
* `npm test` - Run tests using mocha.
* `npm run test` - Run tests.
* `npm run coveralls` - Run tests and output coverage to coveralls.
* `npm run lint` - Run linting using eslint and the defined rules and settings in .eslintrc.
* `npm run lint:watch` - Run linting in watch mode.
* `npm run clean` - Remove the `lib/` folder.
* `npm run build`- Run the code transpilation and output an obfuscated `.min.js` file.
* `npm run dev` - Run the code transpilation, lint and test all in watch mode. Used while developing.
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
