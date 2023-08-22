import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from '../../assets/icons/5847fafdcef1014c0b5e48ce.png';
import './MyProfile.scss';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function MyProfile() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
  const authToken = localStorage.getItem('token');
 
  useEffect(() => {
    // Send a GET request for profile information
    axios
      .get(`${SERVER_URL}/auth/profile`, { 
        withCredentials: true, 
        headers:{
          Authorization: `Bearer ${authToken}`
        } 
      
      })
      .then((res) => {
        setIsAuthenticating(false);
        setUserData(res.data);
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        setIsAuthenticating(false);
        setError(err.message || 'Error fetching profile data');
      });
  }, [authToken]);

  const updateProfile = () => {
    // Send a PUT request to update the user's profile with the data
    axios
      .put(`${SERVER_URL}/auth/profile/${userData.id}`, userData, {
        withCredentials: true,
      })
      .then((res) => {
        setUserData(res.data);
        setError(null); // Clear any previous errors
        console.log('Profile updated successfully:', res.data);
      })
      .catch((err) => {
        setError(err.message || 'Error updating profile');
        console.error('Error updating profile:', err);
      });
  };

  if (isAuthenticating) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="profile">
      <h2>This is your lovely writer space. Let use know about you.</h2>
      <h2>Welcome {userData && userData.username}</h2>
      <div>
        <h3>
          {userData && userData.pen_first_name} {userData && userData.pen_last_name}
        </h3>
        <Avatar className="avatar__image-med" />
      </div>
      <div>
        <h3>Bio:</h3>
        <p>{userData && userData.bio}</p>
        <h3>Links:</h3>
        <p>{userData && userData.links}</p>
        <button onClick={updateProfile}>Update Profile</button>
      </div>
    </section>
  );
}

export default MyProfile;
