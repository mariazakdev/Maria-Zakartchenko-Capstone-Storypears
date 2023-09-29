import "./NavFooter.scss";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";
import { ReactComponent as CloseIcon } from "../../assets/icons/icons8-close.svg";

const Nav = () => {


  return (
    <nav>
        <div className="nav-footer">
        <ul className="nav-footer-list">
          <li><Link to="/story/prompt">SEEDS</Link></li>
          <li><Link to="/storybranches">BRANCHES</Link></li>
          <li><Link to="/storytrees">TREES</Link></li>
          <li><Link to="/story/new">GARDEN</Link></li>
          <li><Link to="/writers">WRITERS</Link></li>
     
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
