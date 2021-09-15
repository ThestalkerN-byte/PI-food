import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  getDietType,
  filterByDietType,
  orderBy,
} from "../../actions";
import "./home.css";
import Card from "../RecipeCard/card";
import Paginado from "../Paged/paged";
export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const allDietTypes = useSelector((state) => state.dietType);
  const [orden, setOrden] = useState("");
  const [actualPage, setActualPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indextoLastRecipe = actualPage * recipesPerPage;
  const indexOfFirstRecipe = indextoLastRecipe - recipesPerPage;
  const currentRecipePerPage = allRecipes.slice(
    indexOfFirstRecipe,
    indextoLastRecipe
  );

  const paginado = (numberPage) => {
    setActualPage(numberPage);
  };

  // useEffect(() => {
  //   dispatch(getDietType());
  //   dispatch(getRecipes());
  // }, [dispatch]);

  function handleFilterDietType(e) {
    dispatch(filterByDietType(e.target.value));
  }
  function order(e) {
    e.preventDefault();
    dispatch(orderBy(e.target.value));
    setActualPage(1);
    setOrden(`Ordenado,${e.target.value}`);
  }

  return (
    <div className="big-papa">
      <div className="selects">
        <div className = "filter">
          <label>Filter By</label>
          <select
            className="select"
            onChange={(e) => {
              handleFilterDietType(e);
            }}
          >
            <option value="All">All</option>
            {allDietTypes &&
              allDietTypes.map((el) => {
                return (
                  <option key={el.id} value={el.name}>
                    {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
                  </option>
                );
              })}
            )
          </select>
        </div>
        <div className = "filter">
          <label>Select Order</label>
          <select
            className="select"
            onChange={(e) => {
              order(e);
            }}
          >
            <option>Select Order</option>
            <option value="ASC">A-Z</option>
            <option value="DES">Z-A</option>
            <option value="Score">Highest score</option>
          </select>
        </div>
      </div>
      <div className="img-back">
        <div className="cotenedor-del-map">
          {currentRecipePerPage &&
            currentRecipePerPage.map((el) => {
              return (
                <Card
                  key={el.id}
                  id={el.id}
                  score={el.healthScore ? el.healthScore : el.score}
                  name={el.title ? el.title : el.name}
                  image={el.img ? el.img : el.image}
                  diets={
                    el.diets ? el.diets : el.dietTypes.map((el) => el.name)
                  }
                />
              );
            })}
          <div className = "paginado">

          <Paginado
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            paginado={paginado}
            />
            </div>
        </div>
      </div>
    </div>
  );
}
