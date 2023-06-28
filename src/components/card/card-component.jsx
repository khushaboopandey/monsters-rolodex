import React, { Component } from "react";
import "./card-component.styles.css";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="card-container" key={this.props.data.id}>
          <img
            src={`https://robohash.org/${this.props.data.id}/?set=set2`}
            alt={`monster ${this.props.data.name}`}
          />
          <h2>{this.props.data.name}</h2>
          <p>{this.props.data.email}</p>
        </div>
      </div>
    );
  }
}
