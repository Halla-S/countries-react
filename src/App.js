import React, { useState } from "react";
import "./App.css";
import Country from "./Country";
import Data from "./allCountries.json";
import Options from "./Options";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState(Data);
  return (
    <div>
      <div className="select-search">
        <input
          type="text"
          placeholder="search"
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
        <Options data={Data} onSelecting={(country) => setCountry(country)} />{" "}
        {/* why this gives me error of too many renders if I put it this way (onChangeProp={setCountry(country))} */}
      </div>
      <div>
        <div className="main">
          {country
            .filter((country) => {
              if (searchTerm === "") {
                return country;
              } else if (
                country.name
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase()) ||country.capital
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return country;
              } else {
                return false;
              }
            })
            .map((country) => {
              return (
                <Country
                  Flag={country.flag}
                  Name={country.name}
                  Population={country.population}
                  Capital={country.capital}
                  Region={country.region}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
