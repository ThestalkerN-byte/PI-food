import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { IoIosHome } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getRecipeFilter } from "../../actions";
import { BsFillStarFill } from "react-icons/bs";

export default function NavBar() {
  const recipesName = useSelector((state) => state.recipesByName);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(getRecipeFilter);
  }, [dispatch]);
  console.log(recipesName);
  function handleSubmit(e) {
    setSearch(e.target.value);
  }
  const enviarData = (e) => {
    e.preventDefault();
    dispatch(getRecipeFilter(search));
  };
  return (
    <nav className="navBar">
      <div className="elementos-navbar">
        <div className="links">
          <NavLink to="/home" className="link" activeClassName="isActive">
            <span className="create-recipe">
              home <IoIosHome className="create-icon" />
            </span>
          </NavLink>
          <NavLink to="/recipe" className="link" activeClassName="isActive">
            <span className="create-recipe">
              Create Recipe
              <TiEdit className="create-icon" />
            </span>
          </NavLink>
          <NavLink to = "/favourites" className="link" activeClassName="isActive">
            <span className = "create-recipe">Favourites <BsFillStarFill className="create-icon" /></span>
          </NavLink>
        </div>
        <form
          onSubmit={(e) => {
            enviarData(e);
          }}
        >
          <div className="inputSearch">
            <span className="icon">
              <BsSearch />
            </span>
            <input
              onChange={(e) => {
                handleSubmit(e);
              }}
              id="search"
              autoComplete="off"
              type="search"
              placeholder="Search"
            ></input>
            {/* <input
              onChange={(e) => {
                handleSubmit(e);
              }}
              type="Submit"
              value="Search"
              /> */}
          </div>
        </form>
      </div>
    </nav>
  );
}
