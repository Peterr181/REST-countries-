import React, { useState } from "react";
import "./FilterSearch.css";

const FilterSearch = ({ setFilterRegion, filterRegion, isDarkMode }) => {
  const regions = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctic",
  ];

  const handleSelectRegion = (event) => {
    setFilterRegion(event.target.value);
  };

  return (
    <div className="region__container">
      <select
        className={`select__bar ${
          isDarkMode ? "select__bar__dark" : "select__bar__white"
        }`}
        value={filterRegion}
        onChange={handleSelectRegion}
      >
        <option value="">All</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSearch;
