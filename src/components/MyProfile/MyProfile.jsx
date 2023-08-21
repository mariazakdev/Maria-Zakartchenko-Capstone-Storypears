import React from 'react';
import "./MyProfile.scss";
import Avatar from "../../assets/icons/5847fafdcef1014c0b5e48ce.png";
import { useEffect, useState } from 'react';
import axios from 'axios';


const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function MyProfile(userData , setUserData) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Send a GET request for profile information
    // If user is currently logged in, we will get profile data, if they are not logged in, we will get 401 (Unauthorized) that we can handle in `.catch`
    // Note that we need to use `withCredentials` in order to pass the cookie to a server
    axios
      .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
      .then((res) => {
        setIsAuthenticating(false);
        setIsLoggedIn(true);
        setUserData(res.data);
      })
      .catch((err) => {
        // If we are getting back 401 (Unauthorized) back from the server, means we need to log in
        if (err.response.status === 401) {
          // Update the state: done authenticating, user is not logged in
          setIsAuthenticating(false);
          setIsLoggedIn(false);
        } else {
          console.log('Error authenticating', err);
        }
      });
  }, []);
  const formatDate = (date) => {
    // Return date formatted as 'month/day/year'
    return new Date(date).toLocaleDateString('en-US');
  };

  // While the component is authenticating, do not render anything (alternatively, this can be a preloader)
  if (isAuthenticating) return null;

  return (

    
    <section className="profile">
      <h2>Welcome {userData.username} </h2>
      <div>
        <h3>{userData && userData.pen_first_name} {userData.pen_last_name}</h3>
        <Avatar className='avatar__image-med' />
      </div>
      <div>
        <h3>Bio:</h3>
        <p>{userData.bio}</p>
        <h3>Links:</h3>
        <p>{userData.links}</p>
      </div>
      {/* <div>
        <h3>Pear Tree</h3>
        <p>Placeholder story1<span>with <Avatar className='avatar__image-sm' /></span></p>
        <p>Placeholder story2<span>with <Avatar className='avatar__image-sm' /></span> </p>
        <p>Placeholder story3<span>with <Avatar className='avatar__image-sm' /></span> </p>
      </div> */}
    </section>
  );
}

export default MyProfile;