import React from 'react';
import './ProfileBtn.css';
import { Link, useHistory } from 'react-router-dom';
import accountPath from '../../../images/header-account.svg';

function ProfileBtn(){

    const history = useHistory();

    return (
        <ul className="profile-btn__list">
            <li className="profile-btn__link-item">
                <Link to='/profile' className="profile-btn__link">
                    Аккаунт
                </Link>
            </li>
            <li className="profile-btn__link-item">
                <img src={ accountPath } alt="Логотип аккаунта" 
                className="profile-btn__logo" 
                onClick={()=>{history.push('/profile')}}/>
            </li>
        </ul>
    )
}

export default ProfileBtn;