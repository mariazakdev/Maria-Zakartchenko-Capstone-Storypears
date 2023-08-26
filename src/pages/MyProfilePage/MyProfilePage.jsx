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
    const {id} = useParams();
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          // Get the JWT token from your authentication service
          const token = authService.getToken();
  
          // Set up headers with the JWT token
          const headers = {
            Authorization: `Bearer ${token}`,
          };
  
          // Make an authenticated request to the profile route
          const response = await axios.get('http://localhost:8080/auth/profile', { headers });
  
          // Set the user data with the response data
          setUserData(response.data.user);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      };
  
      fetchUserData();
    }, [id]);
  

    return (
        <div className="App">
            <Header />
            <MyProfile userData ={userData} setUserData={setUserData}/>
            <Footer />
        </div>
    );
}

export default ProfilePage;
