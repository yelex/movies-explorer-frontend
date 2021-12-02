import React from 'react';
import './BurgerBtn.css';

function BurgerBtn({handleClick}){
    return (
        <button type="button" className="burger-btn" onClick={handleClick}>
        </button>
    )
}

export default BurgerBtn;