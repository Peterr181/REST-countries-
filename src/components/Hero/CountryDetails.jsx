import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./CountryDetails.css";

const baseUrl = "https://restcountries.com/v3.1";

const CountryDetails = ({ isDarkMode }) => {
  const { name } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`${baseUrl}/name/${name}`);
        const data = await response.json();
        setCountryDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    console.log(countryDetails);
    fetchCountry();
  }, [name]);

  return (
    <>
      <div className="country__detail__container">
        <div className="button__container">
          <Link
            to="/"
            className={`back__button ${
              isDarkMode ? "back__button__dark" : "back__button__white"
            }`}
          >
            <ion-icon name="arrow-back-outline"></ion-icon> Back
          </Link>
        </div>
        {countryDetails.map((country) => {
          const {
            numericCode,
            flags,
            name,

            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = country;

          return (
            <>
              <div className="country__item__huge__container" key={numericCode}>
                <div className="country__flag__container">
                  <img
                    src={flags.png}
                    alt="country flag"
                    className="country__flag__image2"
                  />
                </div>

                <div className="country__detail__item">
                  <div className="item__main__info">
                    <h2>{name.common}</h2>
                    <p>
                      <span className="detail__bolded">Native Name: </span>
                      {name.common}
                    </p>
                    <p>
                      <span className="detail__bolded">Population:</span>{" "}
                      {population}
                    </p>
                    <p>
                      <span className="detail__bolded">Region:</span> {region}
                    </p>
                    <p>
                      <span className="detail__bolded">Sub Region:</span>{" "}
                      {subregion}
                    </p>
                    <p>
                      <span className="detail__bolded">Capital:</span> {capital}
                    </p>
                  </div>

                  <div className="item__second__info">
                    <p>
                      <span className="detail__bolded">Top Level Domain:</span>{" "}
                      {country.tld[0]}
                    </p>
                    <p>
                      <span className="detail__bolded">Currencies:</span>{" "}
                      {Object.values(currencies).map((currency) => (
                        <span key={currency.name}>{currency.name}, </span>
                      ))}
                    </p>
                    <p>
                      <span className="detail__bolded">Languages:</span>{" "}
                      {Object.values(languages).map((lang) => (
                        <span key={lang.name}>{lang} </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
              <div className="borders">
                {borders && borders.length > 0 && (
                  <>
                    <h2>Border Countries: </h2>
                    {borders.map((border) => {
                      return (
                        <ul key={border}>
                          <li
                            className={`border__name ${
                              isDarkMode
                                ? "border__name__dark"
                                : "border__name__white"
                            }`}
                          >
                            {border}
                          </li>
                        </ul>
                      );
                    })}
                  </>
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CountryDetails;
