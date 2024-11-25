import React from "react";
import ToggleTheme from "./ToggleTheme";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="dark:bg-gray-800 dark:border-gray-800 dark:text-white w-full p-3 flexbg-gray-300">
      <ToggleTheme />
    </div>
  );
};

export default Navbar;
