"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function Nav() {
    // State to track the current theme
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark-mode"); // Add class to <html>
  };
  // Update the body's class based on the theme
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav>
        <Link href="/">
        <h1>
          E<i style={{ fontWeight: 200 }}>xcellence</i>
        </h1>
        </Link>
        <div className="navContain">
          <Link className="navLink" href="/About">
            About
          </Link>
          <Link className="navLink" href="/Projects">
            My Works
          </Link>
          <div className="navLinkCon">
            <img alt="nexticon" src="./img/icon.png" />
            <Link className="navLinkContact" href="/Contact">
              Let's Talk
            </Link>
          </div>
          {/* Toggle icon based on darkMode */}
          <img
            alt="light/dark toggle"
            src={darkMode ? "/img/moon.png" : "/img/sun.png"}
            onClick={toggleTheme}
            style={{ cursor: "pointer", width: "30px" }}
          />
        </div>
      </nav>
  )
}

export default Nav