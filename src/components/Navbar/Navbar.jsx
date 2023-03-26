import React from "react";
import "./Navbar.css";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`navbar__container ${
        isDarkMode ? "navbar__container__dark" : "navbar__container__white"
      }`}
    >
      <div className="navbar__container__inner">
        <div className="navbar__header__container">
          <h2>Where in the world?</h2>
        </div>
        <div className="navbar__switcher__container" onClick={toggleDarkMode}>
          <ion-icon className="moon__icon" name="moon"></ion-icon>
          {isDarkMode ? <span>White Mode</span> : <span>Dark Mode</span>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
