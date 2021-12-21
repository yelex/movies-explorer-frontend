import './Header.css';
import React from 'react';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import MainLogo from '../ui/MainLogo/MainLogo';
import Navigation from '../Navigation/Navigation';
import ProfileBtn from '../ui/ProfileBtn/ProfileBtn';
import AuthNav from '../AuthNav/AuthNav';
import BurgerBtn from '../ui/BurgerBtn/BurgerBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header(props) {
  const isLoggedIn = React.useContext(IsLoggedInContext);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [ isBurgerMenuOpen, setIsBurgerMenuOpen ] = React.useState(false);
  const isMobile = width <= 768;

  function handleBurgerBtnClick(){
    setIsBurgerMenuOpen(true);
  }

  function handleCloseBurgerMenu(){
    setIsBurgerMenuOpen(false);
  }

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(()=>{
    if (!isMobile){
      handleCloseBurgerMenu();
    }
  }, [isMobile]);

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return (
    <header className={`header ${props.isLanding ? 'header_bg_landing' : ''}`}>
      <div className="header__container">
        <div className="header__column header__column_align_left">
          <MainLogo/>
        </div>

        {!isMobile && isLoggedIn &&
          (<>
            <div className="header__column header__column_align_center">
              <Navigation/>
            </div>
            <div className="header__column header__column_align_right">
              <ProfileBtn isBurger={false}/>
            </div>
          </>)}

        {!isLoggedIn && (
        <div className="header__column header__column_align_right">
          <AuthNav/>
          </div>)}

        {isMobile && isLoggedIn && (
          <>
          <div className="header__column header__column_align_right">
            <BurgerBtn handleClick={handleBurgerBtnClick} isLanding={props.isLanding}/>
          </div>
          <BurgerMenu isOpen={isBurgerMenuOpen} closeMenu={handleCloseBurgerMenu}/>
          </>
        )}
        
      </div>
    </header>
  );
}

export default Header;