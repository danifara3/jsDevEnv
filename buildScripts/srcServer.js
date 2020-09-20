// var express = require('express');
// var path = require('path');
// var open = require('open');

//we can used import cos of babel
//it transpil the latest feature to es5 or es6
import express from 'express';
import path from 'path';
import open from 'open';

//for webpack after it has been configured
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port= 3000;
const app = express();

//compiler and app.use also for webpack
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noinfo: true,
  publicPath: config.output.publicPath
}));

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+ port)
  }
});