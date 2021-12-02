import React from 'react';
import './MainLogo.css';
import { useHistory } from 'react-router';
import logoPath from '../../../images/header-logo.svg';

function MainLogo(){
    const history = useHistory();

    return (
        <img src={ logoPath } alt="Логотип" 
        className="main-logo_img" 
        onClick={()=>{history.push('/')}}/>
    )
}

export default MainLogo;
