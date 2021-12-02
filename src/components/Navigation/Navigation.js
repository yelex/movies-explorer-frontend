import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
      <ul className="nav__list">
        <li className="nav__link-item">
          <Link to='/movies' className="nav__link">
            Фильмы
          </Link>
        </li>
        <li className="nav__link-item">
          <Link to='/saved-movies' className="nav__link">
            Сохраненные фильмы
          </Link>
        </li>
      </ul>
  );
}

export default Navigation;