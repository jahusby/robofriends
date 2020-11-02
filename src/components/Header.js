import React, { useState } from "react";
import "./Header.css";

const Header = ({ searchfield, searchChange }) => {
  /* const [count, setCount] = useState(0); */

  return (
    <div className="header">
      <h1>Robofriends</h1>
      <input
        className="header__search"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
      {/* <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <p>you clicked {count} times</p> */}
    </div>
  );
};

export default Header;
