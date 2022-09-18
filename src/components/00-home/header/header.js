import React, { useContext } from "react";
import StoreContext from "../../../store";
import "./header.scss";

const Header = () => {
  const store = useContext(StoreContext);
  const { darkMode, setDarkMode } = store;
  return (
    <header className={`${darkMode ? "dark-mode-header" : ""}`}>
      <h1>Bach 60-61-96 React Practice</h1>
    </header>
  );
};

export default Header;
