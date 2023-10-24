const express = require('express');
const server = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
//const md = require('./maindesign.js')
server.use(express.static('public'));

server.get('/',function(req,res){
   res.redirect(__dirname +'/public/home.html')
});

server.listen ('2700',function(req,res){
    console.log('Running on sever 2700');
});