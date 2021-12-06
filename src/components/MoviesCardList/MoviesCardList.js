import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import BtnMore from '../ui/BtnMore/BtnMore';

function MoviesCardList(props) {

  return (
    <section className="movies">
      <ul className={`movies__list ${props.isSaved ? 'movies__list_saved' : ''}`}>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
        <MoviesCard title="33 слова о дизайне" duration="1ч 47м"/>
      </ul>
      { !props.isSaved && 
      <BtnMore/>
      }
    </section>
  );
}

export default MoviesCardList;