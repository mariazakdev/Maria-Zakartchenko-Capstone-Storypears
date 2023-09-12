import "./Nav.scss";
import React from 'react';
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";

const Nav = () => {
  return (
    <nav>
      <div className="nav" id="myTopnav">
        <ul className="nav-list">
          <li><Link to="/story/prompt">Seeds</Link></li>
           <li><Link to="/storybranches">Branches</Link></li>
          <li><Link to="/storytrees">Trees</Link></li>
          <li><Link to="/writers">Pears</Link></li>
          <li><Link to="/story/new">Garden</Link></li>
          <li><LogoutButton className="header__logout"/></li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
