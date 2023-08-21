import "./Nav.scss";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";

const Nav = ({user}) => {

  const [userData, setUserData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // fetching for nav avatar and name
    axios.get('http://localhost:8080/users')
      .then(response => {
        const user = response.data[0]; // placeholder user
        setUserData(user);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  const handleLogout = () => {
    setLoggedIn(false);
  };
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
    </ul>

    <div className="nav-user">

          {
            user? (  <div className="user__info">
              <span className="user__info-username"><Link to="./profile">Bob</Link></span>
              <Button value="Log out" className="user__info-logout" onClick={handleLogout} />
            </div>
          ) :(
        <Link to="/login">
          <Button value="Log In" className="user__info-login" />
        </Link>

          )
          }
      
          
     
  
    </div> 

  </nav>
);
};

export default Nav;