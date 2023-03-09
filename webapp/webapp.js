//Require express
const express = require ("express");



//app object
const app = express();

//define variables
let hrefcontact = "<a href='/contact'>Contact</a>"
let hrefbio = "<a href='/bio'>Bio</a>"

//main page
app.get("/", function(req,res) {
    res.send (`Welcome to my first Node.js web site. <br/>
    ${hrefcontact} <br/>
    ${hrefbio}`);
    
});

//contact page
app.get("/contact", function(req,res) {
    res.send ("My name is Ben, and I am learning JavaScript and Node JS ");
    
});

//bio page
app.get("/bio", function(req,res) {
    res.send ("My name is ..., and ");
});

app.listen(8002)