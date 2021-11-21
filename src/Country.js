import React from "react";
import "./App.css";

const Country = (props) => {
  return (
    <div className="country-info">
      <img src={props.flag} alt="" />
      {console.log(props.flag)}
      <h5>{props.name}</h5>
      {console.log(props.name)}
      <ul>
        <li key={3}>Population: {props.population}</li>
        <li key={4}>Region: {props.region}</li>
        <li key={5}>Capital: {props.capital}</li>
      </ul>
    </div>
  );
};
export default Country;
