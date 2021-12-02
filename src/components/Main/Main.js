import './Main.css';
import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Tech/Tech';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Main() {
  return (
    <>
    <Header isLanding={true}/>
    <div className="main">
      <Promo/>
      <AboutProject/>
      <Tech/>
      <AboutMe/>
    </div>
    <Footer/>
    </>
  );
}

export default Main;