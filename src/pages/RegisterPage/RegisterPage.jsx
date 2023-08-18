import React from 'react';
import './RegisterPage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProfileAdd from '../../components/ProfileAdd/ProfileAdd';

function RegisterPage() {


  return (
    <div className="site">
      <Header />
      <section className='site__content'>
          <ProfileAdd />
        </section>
    
      <Footer />
    </div>
  );
}

export default RegisterPage;
