import axios from "axios";

export function postRecipe(body) {
  return async function () {
    const response = await axios.post("http://localhost:3001/api/recipe", body);
    return response;
  };
}

export function addFavourite(payload) {
  return {
    type: "ADD_FAVOURITE",
    payload,
  };
}

export function getRecipes() {
  return async function (dispatch) {
    let recipesData = await axios.get("http://localhost:3001/api/recipes");
    dispatch({
      type: "GET_RECIPES",
      payload: recipesData.data,
    });
  };
}

export function getDietType() {
  return async function (dispatch) {
    let dietType = await axios.get("http://localhost:3001/api/types");
    dispatch({
      type: "GET_DIET_TYPE",
      payload: dietType.data,
    });
  };
}
export function getRecipeByiD(id) {
  return async function (dispatch) {
    let recipeIdData = await axios.get(
      `http://localhost:3001/api/recipes/${id}`
    );
    dispatch({
      type: "GET_RECIPE_ID",
      payload: recipeIdData.data,
    });
  };
}
export function getRecipeFilter(name) {
  return async function (dispatch) {
    let recipesFilterByName = await axios.get(
      `http://localhost:3001/api/recipes?name=${name}`
    );
    if (!recipesFilterByName) {
      console.log("estoy entrando al error");
      return dispatch({
        type: "ERROR_NOT_FOUND",
      });
    }
    console.log("estoy entrando al true ");
    dispatch({
      type: "GET_RECIPE_BY_NAME",
      payload: recipesFilterByName.data,
    });
  };
}

export function filterByDietType(payload) {
  return {
    type: "FILTER_BY_DIET_TYPE",
    payload,
  };
}
export function removeRecipeDetail() {
  return {
    type: "CLEAR_MOVIE_DETAIL",
  };
}

export function orderBy(payload) {
  return {
    type: "ORDER_BY",
    payload,
  };
}
export function detailRecipe(payload) {
  return {
    type: "RECIPE_ID_DETAIL",
    payload,
  };
}
