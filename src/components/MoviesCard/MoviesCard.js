import './MoviesCard.css';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { extractTime } from '../../utils/utils';

function MoviesCard(props) {

  const [isLiked, setIsLiked ] = React.useState(false);
  const [isBtnVisible, setIsBtnVisible ] = React.useState(false);
  const location = useLocation();
  const history = useHistory();

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
        <img className="card__image" alt='test' src={ props.imageUrl } onClick={()=>{window.open(props.trailerLink)}}/>
        <div className="card__text-container">
            <h3 className="card__title">{ props.title }</h3>
            {location.pathname==='/saved-movies' ? 
            <button type="button" className={ `card__btn card__btn_crossed ${ isBtnVisible? 'card__btn_visible':'' }` } onClick={ handleRemoveClick }></button>
            : 
            <button type="button" className={ `card__btn ${isLiked ? 'card__btn_liked' : ''}` } onClick={ handleLikeClick }></button>}
        </div>
        <p className="card__text-duration">{ extractTime(props.duration) }</p>
    </li>
  );
}

export default MoviesCard;