import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MyProfile from '../../components/MyProfile/MyProfile';
import authService from '../../services/authService';
import axios from 'axios';

function ProfilePage() {
const userData = {   
id: 43,
first_name: "John",
last_name: "Rix",
pen_first_name: "JR",
pen_last_name: "Writer",
bio: "I'm a passionate writer with a love for storytelling. My goal is to inspire and entertain readers with my words."
  };



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
