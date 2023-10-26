const express = require('express');
 const server = express.Router();
//const server = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const nodemailer = require('nodemailer')
//const hm = require('./home')

server.use(express.static('public'));

mongoose.connect('mongodb://0.0.0.0/mongosh').then(()=>{
    console.log("database Connected");
})
.catch(()=>{
    console.log("Not database Connected");
})
const conn = mongoose.connection
server.use(bodyparser.urlencoded({ extended : true}))

// Create a transporter with your SMTP details
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'collegematterzz@gmail.com',
        pass: 'xibi wggr ihmg ujso'
    }
});


const rath = new mongoose.Schema({
    firstname:String,
    lastname:String,
    rollno:Number,
    Dob:String,
    phone:Number,
    email:String,
    aadharno:Number,
    collage:String,
    dept:String,
    gender:String,
    year:{
        type: String,
         }
    
    

});
const blix = mongoose.model('data',rath);
//server.get('/register',(req,res)=> {
  //  res.sendFile(__dirname + '/public/reg.html')
 //})

console.log('hello');

server.post('/register',(req,res)=>{
    console.log(req.body)
    var firstname=req.body.firstname
    var lastname=req.body.lastname
    var rollno=req.body.rollno
    var dob=req.body.dob
    var phone=req.body.phone
    var email = req.body.email
    var aadharno =req.body.aadharno
    var collage=req.body.collage
    var dept=req.body.dept
    var year=req.body.year
    var gender = req.body.gender

    conn.collection('boss').insertOne({'firstname':firstname,'lastname':lastname,'rollno':rollno,'Dob':dob,'phone':phone,
    'email':email,'aadharno':aadharno,'college':collage,'dept':dept,'year':year})
    console.log('Value inserted');
    //res.send('Value Inserted')
    var emil = req.body.email

    var mailOptions = {
        from: 'collegematterzz@gmail.com',
        to: emil,
        subject: 'IDEATHONS REGISTER CONFIRM EMAIL',
        html:'Dear,<br>'+firstname+'  ThankYou for registering in IDEATHON program'+ '<br>by<br>'+'Gobi Arts And Science College'
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.sendFile(__dirname + '/public/home.html')
});
//  server.listen(3100,()=>{
//    console.log("server running Port 3100");
// })





server.get('/test',(req,res)=>{
    res.send("<h1>testing");
})
module.exports=server;