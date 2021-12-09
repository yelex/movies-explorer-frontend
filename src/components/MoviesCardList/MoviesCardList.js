import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import BtnMore from '../ui/BtnMore/BtnMore';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {

  return (
    <section className="movies">
      {props.isEmptyResults && <h1>Нет результатов</h1>}
      {props.movies.length!==0 
      && 
      (<><ul className={`movies__list ${props.isSaved ? 'movies__list_saved' : ''}`}>
        {props.movies.map(movie => {

        return <MoviesCard 
          key={movie.id} 
          title={movie.nameRU}
          imageUrl={`https://api.nomoreparties.co${movie.image.url}`}
          duration={movie.duration}
          trailerLink={movie.trailerLink}/>
      })}
      </ul>
      { !props.isSaved && 
      <BtnMore/>
      }
      </>)}
      { props.isPreloaderVisible && <Preloader/>}
      
      
    </section>
  );
}

export default MoviesCardList;