const express = require("express");
const axios = require("axios");
const router = express.Router();
const {Recipe, DietType} = require('../../db')

router.get("/", async (req, res) => {
 

      const typesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=acea5c78b9c24045bd70de9cbf7df12d&number=100&addRecipeInformation=true`)
      console.log(typesApi.data)
      const types = await typesApi.data.results.map((result) => {
        return result.diets;
      });
      let final = types.flat();
      console.log('estoy intentando ')
      final = final.forEach((e) => {
        DietType.findOrCreate({
          where: { name: e },
        });
      });
      const allTypes = await DietType.findAll()
      res.send(allTypes)
      
   
});
module.exports = router;
