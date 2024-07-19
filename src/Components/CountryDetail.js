import React, { useEffect, useState } from "react";
import "../Components/CountryDetail.css";
import { useParams } from "react-router-dom";

function CountryDetail({ lightData }) {
  const [country, setCountry] = useState([]);

  

  const params = useParams();

  const productId = params.id;
  console.log("ProductId=", params.id);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }, [productId]);

  return (
    <div className="country-his">
      <button className="backButton">
        <i className="fa-solid fa-arrow-left"></i>Back
      </button>
      <div className={lightData ? "dark" : "country-details"}>
        <img src={country.map((ele) => ele.flags.png)} alt="card-img" />
        <div className="country-info">
          <h4>Name:{country.map((ele) => ele.name.common)}</h4>
          <p>
            <b>Native Name:{country.navtiveName}</b>
          </p>
          <p>
            <b>Population:</b>
            {country.map((ele) => ele.population)}
          </p>
          <p>
            <b>Region:</b>
            {country.map((ele) => ele.region)}
          </p>
          <p>
            <b>Sub-region:</b>
            {country.map((ele) => ele.subregion)}
          </p>
          <p>
            <b>Capital:</b>
            {country.map((ele) => ele.capital)}
          </p>
          <p>
            <b>Top Level Domain:</b>
            {country.map((ele) => ele.tld.join(", "))}
          </p>
          <p>
            <b>Curriences:</b>
            {country.map((ele) => ele.currencies.name)}
          </p>
          <p>
            <b>Languges:</b>English
          </p>
         
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
