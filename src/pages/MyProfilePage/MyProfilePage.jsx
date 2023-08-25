import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MyProfile from '../../components/MyProfile/MyProfile';
const apiURL = process.env.REACT_APP_API_URL;

function MyProfilePage() {

    return (
        <div className="App">
            {/* <Header /> */}
            <MyProfile/>
            <Footer />
        </div>
    );
}

export default MyProfilePage;
