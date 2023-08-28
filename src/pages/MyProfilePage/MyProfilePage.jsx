import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MyProfile from '../../components/MyProfile/MyProfile';
import authService from '../../services/authService';
import axios from 'axios';

function ProfilePage() {
const userData = 
{
  id: 2,
  avatar_url: null,
  password: "password1",
  email: "user1@example.com",
  first_name: "John",
  last_name: "Doe",
  pen_first_name: "Penelope",
  pen_last_name: "Drake",
  bio: "Poet with a heart full of emotions and a pen dipped in ink.",
  links: ["https://twitter.com/user2", "https://linkedin.com/in/user2"]
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
