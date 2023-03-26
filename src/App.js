import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CountryDetails from "./components/Hero/CountryDetails";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.style.backgroundColor = "hsl(207, 26%, 17%)";
      body.style.color = "#fff";
    } else {
      body.style.backgroundColor = "hsl(0, 0%, 98%)";
      body.style.color = "#000";
    }
  }, [isDarkMode]);

  return (
    <Router>
      <>
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<Hero isDarkMode={isDarkMode} />} />
          <Route
            path="/countries/:name"
            element={<CountryDetails isDarkMode={isDarkMode} />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
