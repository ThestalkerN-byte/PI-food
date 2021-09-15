import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDietType, getRecipes } from "../../actions";
export function LandingPage() {
 const dispatch = useDispatch()

 
  return (
    <div className="container">
      <div className = "button-landing">
        <Link to="/home">
          <button className="Home">To Home</button>
        </Link>
      </div>
    </div>
  );
}
export default LandingPage;
