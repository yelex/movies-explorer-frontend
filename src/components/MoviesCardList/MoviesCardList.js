import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {

  return (
    <section className="movies">
      <ul className="movies__list">
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
      </ul>
    </section>
  );
}

export default MoviesCardList;