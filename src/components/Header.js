import React from "react";
import "./Header.css";

const Header = ({ searchField, searchChange }) => {
  return (
    <div className="header">
      <h1>Robofriends</h1>
      <input
        className="header__search"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default Header;
