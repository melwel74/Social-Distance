const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

//for images if time
// const fileupload = require('express-fileupload');


const express = require('express');
// import { create } from 'express-handlebars';
// const hbs = create({});
// import { join } from 'path';

// //for images if time
// // const fileupload = require('express-fileupload');


// import express, { static, json, urlencoded } from 'express';
//Instantiate the server
const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join (__dirname,'public')))//initial_path(let)
app.use(express.json ())
app.use(express.urlencoded({extended:false}))



//new express route
app.get('/api/social-distance', (req,res) =>{
    res.json('social-distance');
})
app.use(require('./controllers'))


//make the server listen
app.listen(3001,() =>{
    console.log('listening.....');
})

//-dp
app.get('/',(req,res)=>{
    res.sendFile(path.join(initial_path,"index.html"));
})