import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { extractTime } from '../../utils/utils';
import { addMovieToSaved, removeMovieFromSaved } from '../../utils/MainApi';

function MoviesCard(props) {

  const [ isLiked, setIsLiked ] = React.useState(false);
  const [ isBtnVisible, setIsBtnVisible ] = React.useState(false);
  const location = useLocation();

  React.useEffect(()=>{
    setIsLiked(props.isLiked)
  }, [props.isLiked])


  function handleHover(){
    if (location.pathname==='/saved-movies'){
      setIsBtnVisible(!isBtnVisible);
    }
  }

  function handleLinkClick(){
    if (props.movie.trailerLink){
      window.open(props.movie.trailerLink)
    } else {
      props.setupErrorMessage('Трейлер не найден');
    }
  }

  function handleRemoveClick(){
    console.log('dislike')
    const {
      id: movieId} = props.movie;
    removeMovieFromSaved(movieId).then(()=>{
        setIsLiked(false)
      }).catch(err => console.log(err))
  }

  function handleLikeClick(){
    console.log('like')
    let {country,
      director,
      duration,
      year,
      description,
      image: {url: image, 
        formats:{thumbnail:{url:thumbnail}}},
      trailerLink: trailer,
      id: movieId,
      nameRU,
      nameEN} = props.movie;

    image = `https://api.nomoreparties.co${image}`;
    thumbnail = `https://api.nomoreparties.co${thumbnail}`;
    console.log({country,
      director,
      duration,
      year,
      description,
      image, 
      thumbnail,
      trailer,
      movieId,
      nameRU,
      nameEN})
    addMovieToSaved({country,
      director,
      duration,
      year,
      description,
      image, 
      thumbnail,
      trailer,
      movieId,
      nameRU,
      nameEN}).then(()=>{
      setIsLiked(true)
    }).catch(err => {
      console.log(err)
      if (err.statusCode && err.error){
        props.setupErrorMessage(`${err.statusCode} ${err.error}`);
      } else {
        props.setupErrorMessage('Возникла ошибка');
      }

    })

  }

  return (
    <li key={props.movie.movieId} className="card" onMouseOver={handleHover} onMouseOut={handleHover}>
        <img className="card__image" 
        alt={props.movie.nameRU} 
        src={!props.isSaved ? `https://api.nomoreparties.co${props.movie.image.url}`: props.movie.image } 
        onClick={handleLinkClick}/>
        <div className="card__text-container">
            <h3 className="card__title">{ props.movie.nameRU }</h3>
            {location.pathname==='/saved-movies' ? 
            <button type="button" 
            className={ `card__btn card__btn_crossed ${ isBtnVisible? 'card__btn_visible':'' }` } 
            onClick={ ()=>{props.onRemove(props.movie.movieId)} }></button>
            : 
            <button type="button" 
            className={ `card__btn ${isLiked ? 'card__btn_liked' : ''}` } 
            onClick={ isLiked ? handleRemoveClick : handleLikeClick }></button>}
        </div>
        <p className="card__text-duration">{ extractTime(props.movie.duration) }</p>
    </li>
  );
}

export default MoviesCard;