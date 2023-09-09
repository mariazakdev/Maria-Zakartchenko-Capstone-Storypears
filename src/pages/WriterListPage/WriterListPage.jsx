import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WriterList from '../../components/WriterList/WriterList'
import React, { useState, useEffect } from 'react';
import authService from '../../services/authService';

import axios from 'axios';
import './WriterListPage.scss'

function WriterListPage() {
  const [writerListData, setWriterListData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await authService.getUsers();
        setWriterListData(users);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className="Site">
      <Header />
      <section className='site__content'>

      <WriterList writerListData={writerListData} />
      </section>
      <Footer />
    </div>
  );
}

export default WriterListPage;
