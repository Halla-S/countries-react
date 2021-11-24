import React, { useState } from "react";
import "./App.css";
import Country from "./Country";
import Data from "./allCountries.json";


function App() {
   let [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
      <div className="main">
        {Data.filter((country) => {
              if (searchTerm === "") {
                return country;
              } else if (
                country.name
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())||country.capital.toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return country;
              }else{
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
  );
}

export default App;
