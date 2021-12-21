import React from 'react';
import './AuthNav.css';
import { Link } from 'react-router-dom';

function AuthNav(){

    return (
        <ul className="auth-nav__list">
            <li className="auth-nav__btn">
                <Link to='/signup' className="auth-nav__link auth-nav__link_color_white">
                    Регистрация
                </Link>
            </li>
            <li className="auth-nav__btn auth-nav__btn_type_signin">
                <Link to='/signin' className="auth-nav__link auth-nav__link_color_black">
                    Войти
                </Link>
            </li>
        </ul>
    )
}

export default AuthNav;