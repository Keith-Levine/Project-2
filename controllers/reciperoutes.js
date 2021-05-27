const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Recipe = require('../models/recipes.js')

router.get('/', (req, res)=>{
    res.send('connected')
});

module.exports = router;