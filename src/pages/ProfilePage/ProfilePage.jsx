import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Profile from '../../components/Profile/Profile';

function ProfilePage({match}) {
    const [userData, setUserData] = useState(null);
    const apiURL = process.env.REACT_APP_API_URL;
    const { id: userId } = useParams();
  
    useEffect(() => {
      axios
        .get(`http://localhost:8080/users/${userId}`)
        .then(response => {
          setUserData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching story:', error);
        });
    }, [apiURL, userId]);
  
    return (
        <div className="App">
            <Header />
            <Profile userData ={userData} setUserData={setUserData}/>
            <Footer />
        </div>
    );
}

export default ProfilePage;
