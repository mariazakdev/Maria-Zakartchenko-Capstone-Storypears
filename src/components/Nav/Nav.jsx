import "./Nav.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button/Button";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";

const Nav = ({ user, setUser }) => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/story/prompt">Prompts</Link>
        </li>
        <li>
          <Link to="/stories">All Stories</Link>
        </li>
        <li>
          <Link to="/story/new">Writing space</Link>
        </li>
        <li>
          <Link to="/story/depot">Depot</Link>
        </li>
        <li>
          <Link to="/writers">writers</Link>
        </li>
        
      </ul>
<LogoutButton/>
      <div className="nav-user">
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
};

export default Nav;
