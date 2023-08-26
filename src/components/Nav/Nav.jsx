import "./Nav.scss";
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";

const Nav = () => {
  // const { user } = useContext(AuthContext);
const user =true;
  return (
<nav className="nav">
      <ul className="nav-list">
        {/* Always show the "Why Join?" link */}
        <li>
          <Link to="/about">Why Join?</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user && (
          // Show these links only when the user is logged in
          <>
            <li>
              <Link to="/story/prompt">Prompts</Link>
            </li>
            <li>
              <Link to="/stories">All Stories</Link>
            </li>
            <li>
              <Link to="/story/new">Writing Space</Link>
            </li>
            <li>
              <Link to="/story/depot">Depot</Link>
            </li>
            <li>
              <Link to="/writers">Writers</Link>
            </li>
          </>
        )}
      </ul>
      <div className="nav-user">
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
};

export default Nav;
