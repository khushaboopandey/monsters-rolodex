import React, { Component } from "react";
import "./search-box.styles.css";

export default class SearchBox extends Component {
  render() {
    const { onSearchChange, className, placeholder } = this.props;
    return (
      <div>
        <input
          className={`serach-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onSearchChange}
        />
      </div>
    );
  }
}
