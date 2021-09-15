import React from "react";
import "./paged.css";

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
  const numberPage = [];
  for (let i = 0; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
    numberPage.push(i + 1);
  }
  return (
    <div className="paged-box" > 
      <nav>
        <ul className = "listado">
          {numberPage &&
            numberPage.map((number) => {
              return (
                <div className="Caja">
                  <li className="listado">
                    <a className="elementos" key ={number} onClick={() => paginado(number)}>
                      {number}
                    </a>
                  </li>
                </div>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}
