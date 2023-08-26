import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WriterProfile from '../../components/WriterProfile/WriterProfile';

function ProfilePage() {
    const [userData, setUserData] = useState(null);
    const apiURL = process.env.REACT_APP_API_URL;
    const {id} = useParams();
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/users/${id}`);
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      };
  
      fetchUserData();
    }, [id]);
    return (
        <div className="App">
            <Header />
            <WriterProfile userData ={userData} setUserData={setUserData}/>
            <Footer />
        </div>
    );
}

export default ProfilePage;
