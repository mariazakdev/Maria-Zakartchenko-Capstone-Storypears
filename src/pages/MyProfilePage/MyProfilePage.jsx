import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MyProfile from '../../components/MyProfile/MyProfile';
import authService from '../../services/authService';
import Dashboard from '../../components/DashBoard/DashBoard';
// import { user } from '../../services/authService';

function ProfilePage() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let isMounted = true;

    const fetchUserData = async () => {
      try {
        const data = await authService.getProfile();
        if (isMounted) {
          setUserData(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
   <div className='site'>
      <Header />
      <section className='site__content'>
        {/* <Dashboard userData={userData} user={user}/> */}
        {/* <MyProfile userData={userData} user={user}/> */}
      </section>
      <Footer />
    </div>
  );
}

export default ProfilePage;
