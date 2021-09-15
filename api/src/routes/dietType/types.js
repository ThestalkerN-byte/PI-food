require('dotenv').config();
const express = require("express");
const axios = require("axios");
const router = express.Router();
const {DietType} = require('../../db')
const{
  API_KEY
}=process.env

router.get("/", async (req, res) => {
      const typesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
      const types = await typesApi.data.results.map((result) => {
        return result.diets; 
      });
      let final = types.flat();
      final.forEach((e) => {
        DietType.findOrCreate({
          where: { name: e },
        });
      });
      const allTypes = await DietType.findAll()
      res.send(allTypes)
      
   
});
module.exports = router;
