import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Countries.css";

const baseUrl = "https://restcountries.com/v3.1";

const Countries = ({ inputValue, filterRegion, isDarkMode }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const apiUrl =
      inputValue.length > 0
        ? `${baseUrl}/name/${inputValue}`
        : filterRegion
        ? `${baseUrl}/region/${filterRegion}`
        : `${baseUrl}/all`;

    const fetchCountries = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    setCountries([]); // clear previous search results
    fetchCountries();
  }, [inputValue, filterRegion]);

  return (
    <>
      {countries.length > 0 &&
        countries.map((country) => {
          const { numericCode, name, population, region, capital, flags } =
            country;

          const countryName = name.common;

          return (
            <Link
              to={`/countries/${countryName}`}
              key={countryName}
              className="country__link"
            >
              <div
                className={`country__item ${
                  isDarkMode ? "country__item" : "country__item__white"
                }`}
                key={numericCode}
              >
                <div className="country__flag__container">
                  <img
                    src={flags.png}
                    alt="country flag"
                    className="country__flag__image"
                  />
                </div>
                <div
                  className={`country__item__detail__container ${
                    isDarkMode
                      ? "country__item__detail__container__dark"
                      : "country__item__detail__container__white"
                  }`}
                >
                  <h3>{name.common}</h3>
                  <span>
                    <span className="detail__bolded">Population:</span>{" "}
                    {population.toLocaleString()}
                  </span>
                  <span>
                    <span className="detail__bolded">Region:</span> {region}
                  </span>
                  <span>
                    <span className="detail__bolded">Capital:</span> {capital}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default Countries;
