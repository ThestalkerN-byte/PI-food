const express = require("express");
const recipe = require("../../models/Recipe");
const {DietType, Recipe}  = require("../../db")

const { allRecipesData } = require("../../controllers/recipesC");

const router = express.Router();

router.get("/", async (req, res) => {
  const name = req.query.name;
  let recipes = await allRecipesData();
  if (name) {
    let filtrado = await recipes.filter((el) =>
      el.creacreatedIndb
        ? el.name.toLowerCase().includes(name.toLocaleLowerCase())
        : el.title.toLowerCase().includes(name.toLowerCase())
    );
    filtrado.length
      ? res.status(200).send(filtrado)
      : res.status(404).send("ooops this recipe does not exist");
  } else {
    res.send(recipes);
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allRecipes = await allRecipesData();
  let validate = id.includes("-");

  if (validate) {
    try {
      let dbId = await Recipe.findByPk(id, { include: DietType });
      res.status(200).json([dbId]);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      if (id) {
        let recipeId = await allRecipes.filter((el) => el.id === parseInt(id)
        );
        recipeId.length
          ? res.status(200).send(recipeId)
          : res.status(400).send("Not fuound");
      }
    } catch (err) {
      res.json({ message: err });
    }
  }
});

module.exports = router;
