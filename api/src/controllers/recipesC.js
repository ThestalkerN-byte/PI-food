const {Recipe,DietType} = require('../db')
const axios = require('axios')


 const getRecipesApiData = async () => {
  const allRecipes = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=acea5c78b9c24045bd70de9cbf7df12d&number=100&addRecipeInformation=true`
  );
  const recipesProps = await allRecipes.data.results
  return recipesProps;
};


 const getDbRecipesData = async () =>{
    return await Recipe.findAll({
        include:{
            model: DietType,
            attributes: ['name'],
            through:{
                attributes: [],
            }
            
        }
    })
}

 const allRecipesData = async () =>{
    const apiData = await getRecipesApiData();
    const dbData = await getDbRecipesData();
    const allRecipesData = apiData.concat(dbData)
    return allRecipesData
}


module.exports ={
    getRecipesApiData,
    getDbRecipesData,
    allRecipesData,
} 
