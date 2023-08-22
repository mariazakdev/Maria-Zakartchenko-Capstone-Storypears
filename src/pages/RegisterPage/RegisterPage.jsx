import React from 'react';
import './RegisterPage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
function RegisterPage() {


  return (
    <div className="site">
      {/* <Header /> */}
      <section className='site__content'>
          <RegisterForm />
        </section>
    
      <Footer />
    </div>
  );
}

export default RegisterPage;
