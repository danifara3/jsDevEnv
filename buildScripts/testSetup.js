//this file is not transpiled so must used commonJS and ES5
//this is called in the package .json file for running unit test

//Register babel to transpile before our test run.
require('babel-register')();

//Disable webpack features that Mocha doesn't understand
require.extensions['.css']=function(){};