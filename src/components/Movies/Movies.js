import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
    <div className="movies">
      <SearchForm/>
      <MoviesCardList/>
    </div>
    <Footer/>
    </>
  );
}

export default Movies;