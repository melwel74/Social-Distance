const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path')


const express = require('express')

//Instantiate the server
const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join (__dirname,'public')))
app.use(express.json ())
app.use(express.urlencoded({extended:false}))

//new express route
// 
app.use(require('./controllers'))


app.listen(3001,() =>{
    console.log('hello govnar!')
}); 

app.post('/api/social distance',(req, res)=>{
    console.log(req.body);
    res.json(req.body);
})