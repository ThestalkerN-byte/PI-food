import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, getRecipeByiD, removeRecipeDetail } from "./../../actions/index";
import { useParams } from "react-router-dom";
import './recipeDetails.css'
import {BsBook} from 'react-icons/bs'
import {IoMdListBox} from 'react-icons/io'

export default function RecipeDetail() {
  const dispatch = useDispatch();
  const recipeDataById = useSelector((state) => state.recipeId);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipeByiD(id));
    return () => {
      dispatch(removeRecipeDetail());
    };
  }, [dispatch, id]);
  const agregarFavourite = (e) => {
    dispatch(addFavourite(id))
  }


  return (
    <div className = "detail-content">

      {recipeDataById &&
        recipeDataById.map((el) => {
          return (
            <div key={el.id}>
              <h2>{el.title ? el.title: el.name}</h2>
              <div  className="img-detail">
                <img src={el.img ? el.img : el.image} alt=""/>
              </div>
              <div className = "resume-detail">
                <h3>Resume <BsBook className = "icon-detail"/></h3>
                <p>
                  {el.resume?el.resume:<div dangerouslySetInnerHTML={{ __html: el.summary }} />}
                </p>
              </div>
              <div className = "steps-detail">
                <h3>Steps <IoMdListBox/></h3>
                <p>{el.steps?el.steps:el.analyzedInstructions.map(el => el.steps.map(steps=> steps.step))}</p>
              </div>
              <button className="favorite-detail" type="submit" onClick={e => {agregarFavourite(e)}}>Add To Favorite</button>
            </div>
          );
        })}
      
        
    </div>
  );
}
