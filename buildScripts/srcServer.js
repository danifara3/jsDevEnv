// var express = require('express');
// var path = require('path');
// var open = require('open');

//server setup and others
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

app.get('/users', function(req, res){
  //Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@mail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tammy@mail.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"tina@mail.com"}
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+ port)
  }
});