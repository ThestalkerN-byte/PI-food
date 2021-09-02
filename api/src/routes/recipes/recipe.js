const express = require("express");
const axios = require("axios");
const { Recipe, DietType } = require("../../db");

const router = express.Router();

router.post("/", async (req, res) => {
  let { name, resume, score, scoreHealtyFood, steps, createdIndb,dietType } = req.body;

  let recipeCreated = await Recipe.create(
    name,
    resume,
    score,
    scoreHealtyFood,
    steps,
    createdIndb,
    dietTypecd 
  );
  let dietTypeDb = await DietType.findAll({
    where: { name: dietType },
  });
  recipeCreated.addDietType(dietTypeDb)
  res.send('Creada la receta')
});

module.exports = router;
