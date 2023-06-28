import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    const { onSearchChange, className, placeholder } = this.props;
    return (
      <div>
        <input
          className={className}
          type="search"
          placeholder={placeholder}
          onChange={onSearchChange}
        />
      </div>
    );
  }
}
