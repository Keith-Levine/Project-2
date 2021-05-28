const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Nutrition = require('../models/nutrition.js')

router.get('/', (req, res)=>{
    res.send('working')
});

module.exports = router;