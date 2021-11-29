import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Movies() {
  return (
    <>
    <Header/>
    <div className="movies">
      <SearchForm/>
      <MoviesCardList/>
    </div>
    <Footer/>
    </>
  );
}

export default Movies;