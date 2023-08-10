import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProfileList from '../../components/ProfileList/ProfileList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfilePage() {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/users')
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <ProfileList profileData={profileData} />
      <Footer />
    </div>
  );
}

export default ProfilePage;
