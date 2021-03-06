//check if it's in the production environment or not
if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}



const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//tell the server where it can access the routes created
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/author')
const bookRouter = require('./routes/books')
const gameRouter = require('./routes/games')
const moRouter = require('./routes/mo')
const flowRouter = require('./routes/flowchart')


app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
app.set('layout', 'layouts/layout')
app.use(expressLayouts);
app.use(methodOverride('_method'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))

//import mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//access the connection
const db = mongoose.connection
//log out connected or not
db.on('error', error =>console.log(error))
db.once('open',()=>console.log('connected to Mongoose'))


//link "path" to specific "router"
app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/games', gameRouter);
app.use('/mo', moRouter);
app.use('/flow', flowRouter);


app.listen(process.env.PORT || 3000);
