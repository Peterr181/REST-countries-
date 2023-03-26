import React, { useState, useEffect } from "react";
import "./InputSearch.css";

const InputSearch = ({ setInputValue, isDarkMode }) => {
  const handleSearch = (event) => {
    setInputValue(event.target.value);
    // do something with the input value
  };

  return (
    <div
      className={`input__container ${
        isDarkMode ? "input__container__dark" : "input__container__white"
      } `}
    >
      <p className="search__icon">
        <ion-icon name="search"></ion-icon>
      </p>
      <input
        className={`input ${isDarkMode ? "input__dark" : "input__white"}`}
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default InputSearch;
