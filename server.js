const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session')
const bcrypt = require('bcryptjs')

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODBURI = process.env.MONGODBURI

app.use(express.urlencoded({extended:true}));
app.use(
    session({
      secret: process.env.SECRET, 
      resave: false, 
      saveUninitialized: false 
    })
  )

app.use(methodOverride('_method'));

mongoose.connect(`mongodb://localhost:27017/basiccrud`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const recipesController = require('./controllers/reciperoutes.js');

app.use('/recipes', recipesController);

app.listen(PORT, ()=>{
    console.log('listening on ' + PORT );
});