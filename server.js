const express = require('express');
const path = require('path');
// const fileupload = require('express-fileupload');
// added Fs-D
let initial_path = path.join(__dirname,"public");

const PORT = process.env.PORT || 3001;
//Instantiate the server
const app = express();
// added Fs-D
app.use(express.static(initial_path));
// app.use(fileupload());

app.get('/',(req,res) =>{
    res.sendFile(path.join(initial_path, "index.html"));
})
app.get('/Editor',(req,res)=>{
    res.sendFile(path.join(initial_path,"editor.html"));
})

//new express route
app.get('/api/social-distance', (req,res) =>{
    res.json('social-distance');
})
app.use(require('./controllers'))

//make the server listen
app.listen('3000', () => {
    console.log('listening....')
});