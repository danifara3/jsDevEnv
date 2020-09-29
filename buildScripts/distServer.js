// var express = require('express');
// var path = require('path');
// var open = require('open');

//server setup and others
//we can used import cos of babel
//it transpil the latest feature to es5 or es6
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
// webpack removed


/* eslint-disable no-console */

const port= 3000;
const app = express();
//compiler removed

app.use(compression());
//express get this from dist directory
app.use(express.static('dist'));

// pages server frpm dist folder
app.get('/',function(req, res){
  res.sendFile(path.join(__dirname,'../dist/index.html'));
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