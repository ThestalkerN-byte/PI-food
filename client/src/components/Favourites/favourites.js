import React from "react";
import Card from "../RecipeCard/card";
import { useSelector } from "react-redux";
import "./favourite.css";
export default function Favourites() {
  const favoritos = useSelector((state) => state.favourites);

  return (
    <div className="favorite-content">
      {favoritos &&
        favoritos.map((el) => {
          return (
            <Card
              key={el.id}
              id={el.id}
              score={el.healthScore ? el.healthScore : el.score}
              name={el.title ? el.title : el.name}
              image={el.img ? el.img : el.image}
              diets={el.diets ? el.diets : el.dietTypes.map((el) => el.name)}
            />
          );
        })}
    </div>
  );
}
