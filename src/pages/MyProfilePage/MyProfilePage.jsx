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
          const token = authService.getToken();
  
          const headers = {
            Authorization: `Bearer ${token}`,
          };
  
          const response = await axios.get('http://localhost:8080/auth/profile', { headers });
  
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
