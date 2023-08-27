import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MyProfile from '../../components/MyProfile/MyProfile';
import authService from '../../services/authService';

const authUrl = process.env.REACT_APP_AUTH_URL;

function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = authService.getToken();

        if (token) {
          const headers = {
            Authorization: `Bearer ${token}`,
          };

          const response = await axios.get(`${authUrl}/profile`, { headers });

          setUserData(response.data.user);
        } else {
          // Handle the case where there's no token (user not authenticated)
          setUserData(null); // Clear the user data
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setUserData(null); // Clear the user data on error
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <div className="App">
      <Header />
      <MyProfile userData={userData} />
      <Footer />
    </div>
  );
}

export default ProfilePage;
