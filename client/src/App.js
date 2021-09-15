import './App.css';
import React from 'react'
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/landingPage';
import Home from './components/Home/home';
import NavBar from './components/Navbar/Navbar';
import RecipeDetail  from './components/RecipeCardDetail/recipeDetail';
import CreateRecipe from './components/CreateRecipe/createRecipe';
import Favourites from './components/Favourites/favourites';



export function App() {
  return (
    <div className = "big-container">
     <Route path = "/" component={NavBar}></Route>
     <Route exact path = '/' component={LandingPage}></Route>
     <Route path = "/detail/:id" component = {RecipeDetail}></Route>
     <Route path = "/favourites" component={Favourites}></Route>
     <Route path = '/home' component ={Home}></Route>
     <Route exact path = "/recipe" component={CreateRecipe}></Route>
   </div>
  );
}

export default App;
