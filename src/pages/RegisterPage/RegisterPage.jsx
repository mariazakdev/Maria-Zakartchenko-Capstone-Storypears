import React from 'react';
import './RegisterPage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
function RegisterPage() {


  return (
    <div className="site">
      <section className='site__content'>
      <h1>Welcome to Story Pears</h1>
          <RegisterForm />
        </section>
    
    </div>
  );
}

export default RegisterPage;
