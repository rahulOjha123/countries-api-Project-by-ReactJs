import React from "react";
import { Link } from "react-router-dom";

function Cards({ img, index,name, population, region, captial }) {
  return (
    <>
      <Link className="cards" key={index} to={`/country/${name}`} >
        <div className="img-card">
          <img src={img} alt="card-img" />
        </div>
        <div className="card-info">
         
          <h6>Name:{name}</h6>
          <p>Population:{population}</p>
          <p>Region :{region}</p>
          <p>Capital :{captial} </p>
        </div>
      </Link  >
    </>
  );
}

export default Cards;
