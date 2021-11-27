import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList(props) {
  const location = useLocation();

  return (
    <section className="movies">
      <ul className={`movies__list ${location.pathname==='/saved-movies' ? 'movies__list_saved' : ''}`}>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
      </ul>
      { location.pathname==='/movies' && 
      <button type="button" className="movies__more">
        <p className="movies__more-text">
          Ещё
        </p>
      </button>}
    </section>
  );
}

export default MoviesCardList;