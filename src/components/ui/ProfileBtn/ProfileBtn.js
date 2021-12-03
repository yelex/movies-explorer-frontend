import React from 'react';
import './ProfileBtn.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import accountPath from '../../../images/header-account.svg';
import accountPathWhite from '../../../images/header-account-white.svg';

function ProfileBtn({isBurger}){

    const history = useHistory();
    const location = useLocation();
    const isWhite = (location.pathname === '/')&&(!isBurger);

    return (
        <ul className="profile-btn__list">
            <li className="profile-btn__link-item">
                <Link to='/profile' className={`profile-btn__link ${isWhite && 'profile-btn__link_white'}`}>
                    Аккаунт
                </Link>
            </li>
            <li className="profile-btn__link-item">
                <img src={ isWhite ? accountPathWhite : accountPath } alt="Логотип аккаунта" 
                className="profile-btn__logo" 
                onClick={()=>{history.push('/profile')}}/>
            </li>
        </ul>
    )
}

export default ProfileBtn;