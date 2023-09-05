import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WriterProfile from '../../components/WriterProfile/WriterProfile';
import { useLocation } from 'react-router-dom';



function WriterProfilePage() {
  const location = useLocation();
    const writerData = location.state?.writerData;
    const { username } = useParams();

    return (
      <div className='site'>
      <Header />
      <section className='site__content'>

            <WriterProfile writerData={writerData} />
            </section>
            <Footer />
        </div>
    );
}

export default WriterProfilePage;
