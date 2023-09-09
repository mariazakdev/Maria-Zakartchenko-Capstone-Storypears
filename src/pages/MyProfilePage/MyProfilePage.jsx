import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MyProfile from '../../components/MyProfile/MyProfile';
// import authService from '../../services/authService';
import Dashboard from '../../components/DashBoard/DashBoard';
import { userData } from '../../services/authService';

function ProfilePage() {
  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   let isMounted = true;

  //   const fetchUserData = async () => {
  //     try {
  //       const data = await authService.getProfile();
  //       if (isMounted) {
  //         setUserData(data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  //   fetchUserData();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);
  const userData = {
    id: 68,
    username: "jrwriter",
    password: "$2b$10$Ypd4/Kc5qqcit3luoLduquc4r.lAsq/aOjfdvrwhu9rJri8f1KVt.",
    email: "jon@email.com",
    first_name: "Jon",
    last_name: "Rix",
    pen_first_name: "JR",
    pen_last_name: "Writer",
    bio: "I'm a passionate writer with a love for storytelling. My goal is to inspire and entertain readers with my words.",
    links: ['https://www.facebook.com/22434567567' , 'https://www.instagram.com/yty6757']
}

  return (
   <div className='site'>
      <Header />
      <section className='site__content'>
        <MyProfile userData={userData} />
      </section>
      <Footer />
    </div>
  );
}

export default ProfilePage;
