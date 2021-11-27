import './MoviesCard.css';
import React from 'react';
import testPicPath from '../../images/test-card-pic.svg';

function MoviesCard(props) {

  const [isLiked, setIsLiked ] = React.useState(false);

  function handleLikeClick(){
    setIsLiked(!isLiked);
  }

  return (
    <li className="card" >
        <img className="card__image" alt='test' src={ testPicPath }/>
        <div className="card__text-container">
            <h3 className="card__title">{ props.title }</h3>
            <button type="button" className={ `card__btn ${isLiked ? 'card__btn_liked' : ''}` } onClick={ handleLikeClick }></button>
        </div>
        <p className="card__text-duration">{ props.duration }</p>
    </li>
  );
}

export default MoviesCard;