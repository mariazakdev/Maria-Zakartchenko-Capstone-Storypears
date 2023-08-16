import React from 'react';
import { useRef, useState, useEffect} from 'react';
import Cross from '../../assets/icons/Double-J-Design-Origami-Colored-Pencil-Blue-cross.16.png';
import Check from '../../assets/icons/Double-J-Design-Origami-Colored-Pencil-Green-ok.16.png';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProfileAdd from '../../components/ProfileAdd/ProfileAdd';

function RegisterPage() {


  return (
    <div className="App">
      <Header />
      <ProfileAdd />
      <Footer />
    </div>
  );
}

export default RegisterPage;
