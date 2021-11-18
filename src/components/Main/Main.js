import './Main.css';
import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Tech/Tech';

function Main() {
  return (
    <div className="main">
      <Promo/>
      <AboutProject/>
      <Tech/>
    </div>
  );
}

export default Main;