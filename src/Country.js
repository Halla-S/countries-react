import React from "react";
import "./App.css";

const Country = (props) => {
  return (
    <div className="country-info">
        <img src={props.Flag} alt="" />
        <h5>{props.Name}</h5>
        <ul>
          <li key={3}>Population: {props.Population}</li>
          <li key={4}>Region: {props.Region}</li>
          <li key={5}>Capital: {props.Capital}</li>
        </ul>
      </div>
  );
};
export default Country;
