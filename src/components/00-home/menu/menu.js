import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="bg-dark text-light">
      <ul>
        <li>
          <Link to="/hello-world">Hello World</Link>
        </li>
        <li>
          <Link to="/comp">Comp</Link>
        </li>
        <li>
          <Link to="/">Comp</Link>
        </li>
        <li>
          <Link to="/">Comp</Link>
        </li>
        <li>
          <Link to="/jsx-practice">Jsx</Link>
        </li>
        <li>
          <Link to="/jsx1">Jsx1</Link>
        </li>
        <li>
          <Link to="/jsx2">Jsx2</Link>
        </li>
        <li>
          <Link to="/jsx3">Jsx3</Link>
        </li>
        <li>
          <Link to="/jsx4">Jsx4</Link>
        </li>
        <li>
          <Link to="/jsx5">Jsx5</Link>
        </li>
        <li>
          Styles
          <ul>
            <li>
              <Link to="/">Style1</Link>
            </li>
            <li>
              <Link to="/">Style2</Link>
            </li>
            <li>
              <Link to="/">Style3</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/exchange">Exchange</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
