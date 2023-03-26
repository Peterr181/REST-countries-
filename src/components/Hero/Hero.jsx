import React, { useState } from "react";
import "./Hero.css";
import Countries from "./Countries";
import InputSearch from "./InputSearch";
import FilterSearch from "./FilterSearch";

const Hero = ({ isDarkMode }) => {
  const [inputValue, setInputValue] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  return (
    <div className="hero__container">
      <div className="searching__container">
        <InputSearch setInputValue={setInputValue} isDarkMode={isDarkMode} />
        <FilterSearch
          setFilterRegion={setFilterRegion}
          filterRegion={filterRegion}
          isDarkMode={isDarkMode}
        />
      </div>
      <div className="hero__container__inner">
        <Countries
          inputValue={inputValue}
          filterRegion={filterRegion}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default Hero;
