import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import BtnMore from '../ui/BtnMore/BtnMore';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {

  return (
    <section className="movies">
      
      <ul className={`movies__list ${props.isSaved ? 'movies__list_saved' : ''}`}>
      {props.movies.length!==0 
      && props.movies.map(movie => {

        return (!props.isSaved ? <MoviesCard
          key={movie.id}
          movie={movie}
          isLiked={props.savedMoviesIds.includes(movie.id)}
          isSaved={false}/> 
          : <MoviesCard
          key={movie.id}
          movie={movie}
          onRemove={props.onRemove}
          isSaved={true}/>)})}
      {props.isEmptyResults && 
      <h1 className="movies__empty-results">Нет результатов</h1>}
      </ul>
      { !props.isSaved && props.isMoreBtnVisible &&
      <BtnMore onClick={props.onMore}/>
      }
      { props.isPreloaderVisible && <Preloader/>}
      
      
    </section>
  );
}

export default MoviesCardList;