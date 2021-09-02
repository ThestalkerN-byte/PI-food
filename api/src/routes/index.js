const express = require('express');
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require('./recipes/recipes')
const types = require('./dietType/types')
const recipe = require('./recipes/recipe')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json())
router.use('/recipes',recipes)
router.use('/types',types)
router.use('/recipe',recipe)


module.exports = router;
