const express = require("express");
const recipe = require("../../models/Recipe");
const axios = require("axios");
const apikey = "b0b0fe0e259941ea8bca191337ecef26";
const {
  getRecipesApiData,
  getDbRecipesData,
  allRecipesData,
} = require("../../controllers/recipesC");

const router = express.Router();

router.get("/", async (req, res) => {
  const name = req.query.name
  let recipes = await allRecipesData(); 
  console.log(recipes)
  if(name){
    let filtrado = await recipes.filter(el => el.title.toLowerCase().includes(name.toLowerCase()))
    filtrado.length ? 
    res.status(200).send(filtrado):
    res.status(404).send('ooops this recipe does not exist')
  }
  
  

});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const allRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=b0b0fe0e259941ea8bca191337ecef26`
    );
    if (id) {
      const datos = [allRecipes.data.summary, allRecipes.data.diets];
      res.json(datos);
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
