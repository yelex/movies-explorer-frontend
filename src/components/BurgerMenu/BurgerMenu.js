import React from 'react';
import './BurgerMenu.css';
import Navigation from '../Navigation/Navigation';
import ProfileBtn from '../ui/ProfileBtn/ProfileBtn';

function BurgerMenu(props){

    function handleCloseMenu(evt){
        if (evt.target.classList.contains('burger-menu_active')||evt.target.classList.contains('burger-menu__close-btn')) {
          props.closeMenu();
        };
    }

    return (
        <div className={`burger-menu ${props.isOpen && 'burger-menu_active'}`} onClick={handleCloseMenu}>
            <nav className={`burger-menu__container ${props.isOpen && 'burger-menu__container_active'}`}>
                <button type="button" className="burger-menu__close-btn"></button>
                <Navigation isBurger/>
                <ProfileBtn isBurger/>
            </nav>
        </div>
    )
}

export default BurgerMenu;