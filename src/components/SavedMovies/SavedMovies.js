import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function SavedMovies() {
  return (
    <>
    <Header isLanding={false}/>

    <SearchForm/>
    <MoviesCardList isSaved={true}/>

    <Footer/>
    </>
  );
}

export default SavedMovies;