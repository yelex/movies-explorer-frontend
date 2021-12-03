import './Promo.css';
import React from 'react';
import logoPath from '../../images/hero-logo.svg';
import { Link } from 'react-router-dom';

function Promo() {

  return (
    <section className="hero">
        <div className="hero__container">
            <div className="hero__column hero__column_type_info">
                <h1 className="hero__title">
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <p className="hero__subtitle">
                    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                </p>
                <button className="hero__btn">
                    <Link to='#about' className="hero__link">
                    Узнать больше
                    </Link>
                </button>
            </div>
            <div className="hero__column">
                <img src={ logoPath } alt="Логотип" className="hero__logo"/>
            </div>
        </div>
    </section>
  );
}

export default Promo;