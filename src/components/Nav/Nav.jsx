import "./Nav.scss";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";

const Nav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:8080/auth/profile", {
          withCredentials: true, // Include credentials (cookies) in the request
        });
  
        if (response.status === 200) {
          console.log('User data retrieved successfully:', response.data);
          setUser(response.data.user);
        } else {
          console.error('Authentication has failed!');
          throw new Error('Authentication has failed!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    getUser();
  }, []);
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
            </li><li>
              <Link to="/story/studio">Studio</Link>
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
