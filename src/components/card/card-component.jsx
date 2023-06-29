import React from "react";
import "./card-component.styles.css";

export default function Card(props) {
  return (
    <div>
      <div className="card-container" key={props.data.id}>
        <img
          src={`https://robohash.org/${props.data.id}/?set=set2`}
          alt={`monster ${props.data.name}`}
        />
        <h2> {props.data.name}</h2>
        <p>{props.data.email}</p>
      </div>
    </div>
  );
}
