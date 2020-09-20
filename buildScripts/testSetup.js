//this file is not transpiled so must used commonJS and ES5
//this file is called in the package .json file for running unit test
// using mocha, jsdom for showing in console for speed

//Register babel to transpile before our test run.
require('babel-register')();

//Disable webpack features that Mocha doesn't understand
require.extensions['.css']=function(){};