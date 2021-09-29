import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="box">
        <img
          src={props.image}
          alt={props.title}
        />
      
        <ul className="icon">
        <h3 className="title">Rent {props.rent}</h3>
         
          <li>{props.size}</li>
          <li>{props.situation}</li>
          <li>{props.location}</li>
        </ul>
      </div>

     
    </div>
  );
};

export default Card;


