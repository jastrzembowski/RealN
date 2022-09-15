import React from "react";
import data from "../../../data.json";
import { useParams } from "react-router-dom";

import "./propertyDetails.scss";

function PropertyDetails() {
  const { id }: any = useParams();
  const y: number = parseInt(id) - 1;
console.log(data[`${y}`])

  return (
    <div className="container">
      <div className="flex-box">
        <div className="head-container">
          <div className="slider-box">
            <img
              src={data[`${y}`].img[0].url}
              alt="house"
              className="slider-img"
            ></img>
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
