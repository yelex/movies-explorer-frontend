import './Header.css';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logoPath from '../../images/header-logo.svg';

function Header() {
  const location = useLocation();
  const history = useHistory();
  console.log(location.pathname)
  return (
    <header className="header">
      <div className="header__container">
        <img src={ logoPath } alt="Логотип" className="header__logo" onClick={()=>{history.push('/')}}/>
        <ul className="header__list">
          <li className="header__btn header__btn_type_signup">
            <Link to='/sign-up' className="header__link header__link_type_signup">
              Регистрация
            </Link>
          </li>
          <li className="header__btn header__btn_type_signin">
            <Link to='/sign-up' className="header__link header__link_type_signin">
                Войти
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;