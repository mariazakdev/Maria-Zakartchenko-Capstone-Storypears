import "./Nav.scss";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";

const Nav = () => {

  return (

<nav className="nav">
    <ul className="nav-list">
    
          <>
            <li>
              <Link to="/story/prompt">Seeds</Link>
            </li>
            <li>
              <Link to="/storytrees">Trees</Link>
            </li>
            <li>
              <Link to="/storybranches">Branches</Link>
            </li>
            <li>
              <Link to="/story/new">Garden</Link>
            </li>
           
          
            <li>
              <Link to="/writers">Pears</Link>
            </li>
          </>
      </ul>

      
     
    </nav>
  );
};

export default Nav;
