import './MoviesCard.css';
import React from 'react';
import testPicPath from '../../images/test-card-pic.svg';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {

  const [isLiked, setIsLiked ] = React.useState(false);
  const [isBtnVisible, setIsBtnVisible ] = React.useState(false);
  const location = useLocation();

  function handleHover(){
    if (location.pathname==='/saved-movies'){
      setIsBtnVisible(!isBtnVisible);
    }
  }

  function handleRemoveClick(){

  }

  function handleLikeClick(){
    setIsLiked(!isLiked);
  }

  return (
    <li className="card" onMouseOver={handleHover} onMouseOut={handleHover}>
        <img className="card__image" alt='test' src={ testPicPath }/>
        <div className="card__text-container">
            <h3 className="card__title">{ props.title }</h3>
            {location.pathname==='/saved-movies' ? 
            <button type="button" className={ `card__btn card__btn_crossed ${ isBtnVisible? 'card__btn_visible':'' }` } onClick={ handleRemoveClick }></button>
            : 
            <button type="button" className={ `card__btn ${isLiked ? 'card__btn_liked' : ''}` } onClick={ handleLikeClick }></button>}
        </div>
        <p className="card__text-duration">{ props.duration }</p>
    </li>
  );
}

export default MoviesCard;