const express = require('express');
const server = express();
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose')
const rotes = require('../ideathons/server/register')
server.use(express.static('public'));


server.use(rotes);

// server.get('/',function(req,res){
//    res.redirect(__dirname +'/public/home.html')
// });

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});


server.listen('4000',()=>{
    console.log('Server running on 4000')
})