import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MyProfile from '../../components/MyProfile/MyProfile';
import authService from '../../services/authService';
import axios from 'axios';

function ProfilePage() {


  return (
   <div className='site'>
      <Header />
      <section className='site__content'>
        <MyProfile />
      </section>
      <Footer />
    </div>
  );
}

export default ProfilePage;
