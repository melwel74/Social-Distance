const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const express = require('express')

//Instantiate the server
const app = express();

//new express route
app.get('/api/social-distance', (req,res) =>{
    res.json('social-distance');
})

//make the server listen
app.listen(3001,() =>{
    console.log('hello yall!')
}); 

