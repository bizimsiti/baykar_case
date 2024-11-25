"use client";
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
type Props = {};

const ToggleTheme = (props: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 rounded-full p-1 cursor-pointer ml-auto"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      <Sun className="h-5 w-5" />
      <div
        className="absolute bg-white w-6 h-6 rounded-full shadow-md"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <Moon className="ml-auto h-5 w-5" />
    </div>
  );
};

export default ToggleTheme;
