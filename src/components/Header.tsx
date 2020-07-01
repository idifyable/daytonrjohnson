import React from 'react';
import {
  NavLink
} from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects/" activeClassName="active">Projects</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
