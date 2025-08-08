import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="menu">
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#hardskill">Hard Skills</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
