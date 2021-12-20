const express = require('express');
const path = require('path');
// const fileupload = require('express-fileupload');
// added Fs-D
let initial_path = path.join(__dirname,"public");
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});

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
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// app.use(express.static(path.join (__dirname,'public')))
// app.use(express.json ())
// app.use(express.urlencoded({extended:false}))

//new express route
app.get('/api/social-distance', (req,res) =>{
    res.json({message:'social-distance'});

})
app.use(require('./controllers'))
//upload link
// app.post('upload',(req,res)=>{
//     let file = req.file.image;
//     let date = new Date();
//     //image name
//     let imagename = date.getDate() + date.getTime()+ file.name;
//     //image upload path
//     let path = 'public/uploads/' +imagename;

//     //create upload
//     file.mv(path, (err, result)=>{
//         if(err){
//             throw err;
//         }else{
//             //our image upload path
//             res.json('uploads/${imagename}')
//         }
//     })

// })
//make the server listen
app.listen('3000', () => {
    console.log('listening....')
});