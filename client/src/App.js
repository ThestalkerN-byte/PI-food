import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LandingPage from "./components/LandingPage/landingPage";
import Home from "./components/Home/home";
import NavBar from "./components/Navbar/Navbar";
import RecipeDetail from "./components/RecipeCardDetail/recipeDetail";
import CreateRecipe from "./components/CreateRecipe/createRecipe";
import Favourites from "./components/Favourites/favourites";
import { getDietType,getRecipes } from "./actions";

export function App() {
   const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDietType());
    dispatch(getRecipes());
  }, [dispatch]);
  return (
    <Switch>
      <div className="big-container">
        <Route path="/" component={NavBar}></Route>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/detail/:id" component={RecipeDetail}></Route>
        <Route exact path="/favourites" component={Favourites}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/recipe" component={CreateRecipe}></Route>
      </div>
    </Switch>
  );
}

export default App;
