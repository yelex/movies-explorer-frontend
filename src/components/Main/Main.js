import './Main.css';
import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';

function Main() {
  return (
    <div className="main">
      <Promo/>
      <AboutProject/>
    </div>
  );
}

export default Main;