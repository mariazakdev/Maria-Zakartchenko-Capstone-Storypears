import React from 'react';
import './RegisterPage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
function RegisterPage() {


  return (
    <div className="site">
      <section className='site__content'>
      <h4>Create your writer profile</h4>
          <RegisterForm />
        </section>
    
    </div>
  );
}

export default RegisterPage;
