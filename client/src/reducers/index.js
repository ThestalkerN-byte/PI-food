const initialState = {
  recipes: [],
  allRecipes: [],
  dietType: [],
  recipeId: [],
  favourites: [],
  recipesByName: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };
    case "GET_DIET_TYPE":
      return {
        ...state,
        dietType: action.payload,
      };
    case "GET_RECIPE_ID":
      return {
        ...state,
        recipeId: action.payload,
      };
    case "POST_RECIPE":
      return {
        ...state,
      };
    case "GET_RECIPE_BY_NAME":
      return {
        ...state,
        recipes: action.payload,
      };
    case "ERROR_NOT_FOUND":
      return "Nothing was found with that name";
    case "FILTER_BY_DIET_TYPE":
      const recipes = state.allRecipes;
      const recipeFilter =
        action.payload === "All"
          ? recipes
          : recipes.filter((el) =>
              el.createdIndb
                ? el.dietTypes.map((el) => el.name.includes(action.payload))
                : el.diets.includes(action.payload)
            );
      return {
        ...state,
        recipes: recipeFilter,
      };
    case "ORDER_BY":
      if (action.payload === "ASC") {
        let orderASC = state.recipes.sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.tile) {
            return 1;
          }
          return 0;
        });
        return {
          ...state,
          recipes: orderASC,
        };
      }
      if (action.payload === "DES") {
        let orderDES = state.recipes.sort(function (a, b) {
          if (a.title > b.title) {
            return -1;
          }
          if (a.title < b.tile) {
            return 1;
          }
          return 0;
        });
        return {
          ...state,
          recipes: orderDES,
        };
      }
      if (action.payload === "Score") {
        let orderByScore = state.recipes.sort(function (a, b) {
          if (a.healthScore > b.healthScore) {
            return -1;
          }
          if (a.healthScore < b.healthScore) {
            return 1;
          }
          return 0;
        });
        return {
          ...state,
          recipes: orderByScore,
        };
      }
      break;
    case "RECIPE_ID_DETAIL":
      let recipeById = state.recipeById;
      return {
        ...state,
        recipeId: recipeById,
      };
    case "ADD_FAVOURITE":
      const myRecipes = state.allRecipes;
      let movieFav = myRecipes.find((el) => el.id === parseInt(action.payload));
      if (state.favourites.find((e) => e.id === action.payload)) return state;
      else return { ...state, favourites: [...state.favourites, movieFav] };
    case "CLEAR_MOVIE_DETAIL":
      return {
        ...state,
        recipeId: [],
      };

    default:
      return state;
  }
}

export default rootReducer;
