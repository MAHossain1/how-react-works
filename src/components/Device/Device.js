import React from "react";
import DeviceDetails from "../DeviceDetails/DeviceDetails";
import Watch from "../Watch/Watch";

const Device = props => {
  return (
    <div>
      <h1>New phone will be bought by me.</h1>
      <h2>Name: {props.name} </h2>
      <DeviceDetails price={props.price}></DeviceDetails>
      <Watch></Watch>
    </div>
  );
};

export default Device;
