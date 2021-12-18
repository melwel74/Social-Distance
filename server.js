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

//cookies
// const session = require('express-session');
// const sequelize = require('./Config/connection');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };
// app.use(session(sess));






//make the server listen
app.listen(3001,() =>{
    console.log('hello govnar!')
}); 

