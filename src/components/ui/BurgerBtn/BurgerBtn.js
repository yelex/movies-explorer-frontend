import React from 'react';
import './BurgerBtn.css';

function BurgerBtn({isLanding, handleClick}){
    return (
        <button type="button" className={`burger-btn ${isLanding && 'burger-btn_white'}`} onClick={handleClick}>
        </button>
    )
}

export default BurgerBtn;