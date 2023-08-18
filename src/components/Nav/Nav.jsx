import "./Nav.scss";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NavBar = () => {

  const [userData, setUserData] = useState(null);

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

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/story/prompt">Prompts</Link>
        </li>
        {/* Will not be in final, just want to see it while developing site */}
        <li>
          <Link to="/profile">Profile</Link> 
        </li>
        <li>
          <Link to="/stories">All Stories</Link>
        </li>
        <li>
          <Link to="/story">Story</Link>
        </li>
        <li>
          <Link to="/profile/new">register</Link>

        </li>
        <li>
          <Link to="/story/new">Writing space</Link>
          
        </li>
        <li>
          <Link to="/story/depot">Depot</Link>
          
        </li>
        <li className="nav-list__user">
          {userData && (
            <>
              <div className="user__avatar-circle">
                <img src={userData.avatar_url || '/default-avatar.png'} alt="User Avatar" />
              </div>
              <div className="user__info">
                <span className="username">{userData.username}</span>
                <span className="logout">Log out</span>
              </div>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;