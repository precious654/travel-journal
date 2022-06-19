import React from "react";
import location from "./images/pin.svg";

function Section(props) {
  return (
    <div className="section">
      <div>
        <img src={props.item.image} alt="pic" width="200" className="picture" />
      </div>
      <div>
        <div className="flex write-top">
          <div className="flex write-bottom">
            <img src={location} alt="icon" width="24" />
            <p>{props.item.country}</p>
          </div>
          <a href="#">View on google maps</a>
        </div>
        <h1 className="location">{props.item.location}</h1>
        <p className="date">{props.item.ld} - {props.item.ad}</p>
        <p className="experience">{props.item.experience}</p>
      </div>
    </div>
  )
}

export default Section;
