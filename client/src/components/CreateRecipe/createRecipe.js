import React from "react";
import { useState, useEffect } from "react";
import "./createRecipe.css";
import { useSelector, useDispatch } from "react-redux";
import { getDietType } from "../../actions";
import { postRecipe } from "./../../actions/index";

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const dietTypes = useSelector((state) => state.dietType);

  const [data, setData] = useState({
    name: "",
    resume: "",
    score: 0,
    scoreHealtyFood: 0,
    img: "",
    steps: [],
    dietType: [],
  });
  useEffect(() => {
    dispatch(getDietType());
  }, [dispatch]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelect = (e) => {
    setData({
      ...data,
      dietType: [...data.dietType, e.target.value],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRecipe(data));
    alert("Personaje creado");
    setData({
      name: "",
      resume: "",
      score: 0,
      img: "",
      scoreHealtyFood: 0,
      steps: "",
      dietType: [],
    });
  };

  return (
    <div>
      <div className="recipe-box">
        <form
          id="create-recipe-form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>Name</label>
          <input
            autoComplete="off"
            className="name-form"
            type="text"
            value={data.name}
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <label>Resume</label>
          <input
            autoComplete="off"
            className="resume-form"
            type="text"
            value={data.resume}
            name="resume"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <label>Image</label>
          <input
            autoComplete="off"
            className="image-form"
            type="url"
            value={data.img}
            name="img"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <label>Score</label>
          <input
            autoComplete="off"
            className="puntuacion-form"
            type="number"
            value={data.score}
            name="score"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <label>ScoreHealtyFood</label>
          <input
            autoComplete="off"
            className="puntuacion-sal-form"
            type="number"
            value={data.scoreHealtyFood}
            name="scoreHealtyFood"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <select
            className="select-form"
            onChange={(e) => {
              handleSelect(e);
            }}
          >
            <option>Select DietType</option>
            {dietTypes &&
              dietTypes.map((el) => {
                return (
                  <option key={el.id} value={el.name}>
                    {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
                  </option>
                );
              })}
          </select>
          <ul>
            {data.dietType &&
              data.dietType.map((el) => {
                return <li key={el.name}>{el}</li>;
              })}
          </ul>
          <button className="submit-form" type="submit">
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
}
