import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";

export default function Card(props) {
  return (
    <div className="card">
      <div className="imgBx">
        <img src={props.image} alt="" />
      </div>
      <div className="contentBx">
        <div className="title-bx">
          <h2>{props.name}</h2>
        </div>
        <div className="size">
          {props.diets &&
            props.diets.map((e) => {
              if (typeof e === "object") {
                return <span className="diets">{e.name}</span>;
              }
              return <span className="diets">{e}</span>;
            })}
        </div>
      </div>
      <div className="botton-section">
        <Link to={`/detail/${props.id}`} className="button-see">
          <span>See more </span>
        </Link>
        <h4 className = "score">
          <BsFillStarFill /> {props.score}
        </h4>
      </div>
      {/* <h4>{props.resume}</h4>
          <div>
            <p>{props.steps}</p>
          </div> */}
    </div>
  );
}
