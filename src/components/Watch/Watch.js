import React, { useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
    // console.log(steps);
  };

  return (
    <div style={{ border: "2px solid purple", margin: "9px" }}>
      <h2>This is my Smart Watch</h2>
      <h3>Steps: {steps} </h3>
      <button onClick={increaseSteps}>De Dour....</button>
      <Display name="Gorila" steps={steps}></Display>
    </div>
  );
};

export default Watch;
