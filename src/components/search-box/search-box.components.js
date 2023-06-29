import React, { Component } from "react";
import "./search-box.styles.css";

export default function SearchBox({ className, placeholder, onSearchChange }) {
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
