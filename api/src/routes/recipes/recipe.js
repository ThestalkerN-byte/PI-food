const express = require("express");
const axios = require("axios");
const { Recipe, DietType } = require("../../db");

const router = express.Router();

router.post("/", async (req, res) => {
  let { name, resume, score, scoreHealtyFood, steps, createdIndb,dietType,img} = req.body;
  console.log('este es el body',req.body)
  let recipeCreated = await Recipe.create({
    name:name,
    resume:resume,
    img:img,
    score:score,
    scoreHealtyFood:scoreHealtyFood,
    steps:steps,
    createdIndb:createdIndb,
  }
  
);
  let dietTypeDb = await DietType.findAll({
    where: { name: dietType },
  });
  await recipeCreated.addDietType(dietTypeDb)
  
  res.send(recipeCreated)
});

module.exports = router;
