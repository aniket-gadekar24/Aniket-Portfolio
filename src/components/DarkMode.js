import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "../assets/images/Sun.svg";
import { ReactComponent as Moon } from "../assets/images/Moon.svg";
// import "./DarkMode.css";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply the theme based on `isDarkMode`
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="dark_mode_container">
      <input
        className="dark_mode_input"
        id="darkmode_toggle"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      {/* <label className="dark_mode_label" htmlFor="darkmode_toggle">
        <Sun />
        <Moon />
      </label> */}
    </div>
  );
}

export default DarkMode;
