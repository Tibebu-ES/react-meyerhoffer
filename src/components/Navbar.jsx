import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Navbar = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/archive">OBJECTS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
