import './Header.css';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logoPath from '../../images/header-logo.svg';
import accountPath from '../../images/header-account.svg';

function Header(props) {
  const location = useLocation();
  const history = useHistory();

  return (
    <header className={`header ${location.pathname==='/' ? 'header_bg_landing' : ''}`}>
      <div className="header__container">
        <div className="header__column header__column_align_left">
          <img src={ logoPath } alt="Логотип" className="header__logo" onClick={()=>{history.push('/')}}/>
        </div>
        {props.isLoggedIn ? 
        <>
          <div className="header__column header__column_align_center">
            <ul className="header__list header__list_gap_movies">
              <li className="header__btn">
                <Link to='/movies' className="header__link header__link_color_black">
                  Фильмы
                </Link>
              </li>
              <li className="header__btn">
                <Link to='/saved-movies' className="header__link header__link_color_black">
                  Сохраненные фильмы
                </Link>
              </li>
            </ul>
          </div>
          <div className="header__column header__column_align_right">
            <ul className="header__list header__list_gap_movies">
              <li className="header__btn">
                <Link to='/profile' className="header__link header__link_color_black">
                  Аккаунт
                </Link>
              </li>
              <li className="header__btn header__btn_type_account">
                <img src={ accountPath } alt="Логотип аккаунта" className="header__logo" onClick={()=>{history.push('/profile')}}/>
              </li>
            </ul>
          </div>
        </>
        :
          <div className="header__column header__column_align_right">
            <ul className="header__list header__list_gap_auth">
              <li className="header__btn header__btn_type_signup">
                <Link to='/signup' className="header__link header__link_color_white">
                  Регистрация
                </Link>
              </li>
              <li className="header__btn header__btn_type_signin">
                <Link to='/signin' className="header__link header__link_color_black">
                  Войти
                </Link>
              </li>
            </ul>
          </div>
        }
        
      </div>
    </header>
  );
}

export default Header;