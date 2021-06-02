const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Recipe = require('../models/recipes.js');
const Tag = require('../models/tags.js');
const { populate } = require('../models/recipes.js');

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
    // const recipe = req.body
    Tag.create(req.body, (error, createdTag)=>{
        console.log(createdTag)
        delete req.body.tags
        Recipe.create(req.body, (error, createdRecipe)=>{
            createdRecipe.tags.push(createdTag);
            createdRecipe.save()
            res.redirect('/recipes')
        });
    })
});

router.get('/:id', (req, res)=>{
    Recipe.findById(req.params.id, (err, foundRecipe)=>{
        res.render('show.ejs', {
            recipe:foundRecipe
        });
    });
});

router.delete('/:id', (req, res)=>{
    Recipe.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/recipes');
    });
});

router.get('/:id/edit', (req, res)=>{
    Recipe.findById(req.params.id, (err, foundRecipe)=>{ 
        res.render(
    		'edit.ejs',
    		{
    			recipe: foundRecipe 
    		}
    	);
    });
});

router.put('/:id', (req, res)=>{
    Recipe.findOneAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/recipes');
    });
});

module.exports = router;