import React from "react";
import Dial from "../Dial/Dial";

const Display = props => {
  return (
    <div style={{ border: "2px solid green", margin: "9px" }}>
      <h3>Display Name: {props.name}</h3>
      <p>So far steps today: {props.steps}</p>
      <Dial steps={props.steps}></Dial>
    </div>
  );
};

export default Display;
