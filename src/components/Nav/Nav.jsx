import "./Nav.scss";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";
import { ReactComponent as CloseIcon } from "../../assets/icons/icons8-close.svg";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  }
  const closeMenu = () => {
    setIsActive(false);
  }

  return (
    <nav>
        <div className="nav" id="myTopnav">
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-list ${isActive ? 'active' : ''}`}>
          <li onClick={closeMenu}><Link to="/story/prompt">SEEDS</Link></li>
          <li onClick={closeMenu}><Link to="/storybranches">BRANCHES</Link></li>
          <li onClick={closeMenu}><Link to="/storytrees">TREES</Link></li>
          <li onClick={closeMenu}><Link to="/story/new">GARDEN</Link></li>

          <li onClick={closeMenu}><Link to="/writers">WRITERS</Link></li>
          <div className="nav-list__close">
            <div onClick={closeMenu}><LogoutButton className="logout nav-list__close__logout"/></div>
            <CloseIcon className="nav-list__close__icon" onClick={toggleMenu} />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
