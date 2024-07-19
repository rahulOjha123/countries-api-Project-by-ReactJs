import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function CountryList({lightData}) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  

  const CountryLists = async () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((country) => {
        setData(country);
     
      });
  };

  useEffect(() => {
    CountryLists();
  }, []);

  // const filterCountry = data.filter((courty) =>
  //   courty.region.toLowerCase().includes(option)
  // );
  // console.log(filterCountry);

  return (
    <div className={lightData? "dark":"main-countryList"}>
      <div className="country-list">
        <div className="search">
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search country----"
              onChange={(e) => setInput(e.target.value.toLowerCase())}
            />
          </div>
          <div className="selector">
            <select
              name=""
              className="options"
              onChange={(event) => setInput(event.target.value.toLowerCase())}
            >
              <option value="" hidden className="opt">Country filter---</option>
              <option value="India">India</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card-list">
        {data
          .filter((country) => {
            if (country.name.common) {
              return country.name.common.toLowerCase().includes(input) ||country.region.toLowerCase().includes(input);
            } 
          })
          .map((ele, index) => {
            return (
              <>
                <Cards
                  index={index}
                  img={ele.flags.svg}
                  name={ele.name.common}
                  population={ele.population}
                  region={ele.region}
                  captial={ele.capital?.[0]}
                />
              </>
            );
          })}
      </div>
    </div>
  );
}

export default CountryList;
