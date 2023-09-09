import "./Nav.scss";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";

const Nav = () => {
  const [user, setUser] = useState(true);

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
    
        {user && (
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
              <Link to="/story/new">Writing Space</Link>
            </li>
           
          
            <li>
              <Link to="/writers">Writers</Link>
            </li>
          </>
        )}
      </ul>


      <div className="nav-user">
       <LogoutButton />
              </div>
    </nav>
  );
};

export default Nav;
