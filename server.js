//check if it's in the production environment or not
if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}



const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')//tell the server where it can access the routes created

app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
app.set('layout', 'layouts/layout')
app.use(expressLayouts);
app.use(express.static('public'));

//import mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//access the connection
const db = mongoose.connection
//log out connected or not
db.on('error', error =>console.log(error))
db.once('open',()=>console.log('connected to Mongoose'))



app.use('/', indexRouter)//link "path" to specific "route"

app.listen(process.env.PORT || 3000);
