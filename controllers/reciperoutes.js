const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Recipe = require('../models/recipes.js')

router.get('/', (req, res)=>{
    Recipe.find({}, (error, allRecipes)=>{
        res.render('index.ejs', {
            recipes: allRecipes
        });
    });
});

router.get('/new', (req, res)=>{
    res.render('new.ejs');
});

router.post('/', (req, res)=>{
    Recipe.create(req.body, (error, createdRecipe)=>{
        res.redirect('/recipes');
    });
});

router.get('/:id', (req, res)=>{
    Recipe.findById(req.params.id, (err, foundRecipe)=>{
        res.render('show.ejs', {
            recipe:foundRecipe
        });
    });
});

module.exports = router;