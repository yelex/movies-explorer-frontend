import './Navigation.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation(props) {
  const location = useLocation();
  const activeLinkClass = "nav__link-item_active";
  const isWhiteLink = (location.pathname === '/')&&(!props.isBurger);

  return (
      <ul className="nav__list">
        {props.isBurger && 
        (<li className={`nav__link-item ${location.pathname==="/" && activeLinkClass}`}>
          <Link to='/' className="nav__link">
            Главная
          </Link>
        </li>)}
        <li className={`nav__link-item ${location.pathname==="/movies" && activeLinkClass}`}>
          <Link to='/movies' className={`nav__link ${isWhiteLink && 'nav__link_white'}`}>
            Фильмы
          </Link>
        </li>
        <li className={`nav__link-item ${location.pathname==="/saved-movies" && activeLinkClass}`}>
          <Link to='/saved-movies' className={`nav__link ${isWhiteLink && 'nav__link_white'}`}>
            Сохраненные фильмы
          </Link>
        </li>
      </ul>
  );
}

export default Navigation;