import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { getSavedMovies, removeMovieFromSaved } from '../../utils/MainApi';
import { getMatchedFilms } from '../../utils/utils';

function SavedMovies() {

  const [ savedMovies, setSavedMovies ] = React.useState([]);
  const [ isPreloaderVisible, setIsPreloaderVisible ] = React.useState(false);
  const [ resultMovies, setResultMovies ] = React.useState([]);
  const [ isEmptyResults, setIsEmptyResults ] = React.useState(false);
  const [ isShortMovies, setIsShortMovies ] = React.useState(false);

  React.useEffect(()=>{
    getSavedMovies().then(savedMovies => {
      setSavedMovies(savedMovies)
      setResultMovies(savedMovies)
    })
  }, [])

  function clearMovies(){
    setResultMovies([]);
  }

  function handleRemoveMovie(movieId){
    console.log('in RemoveMovie')
    removeMovieFromSaved(movieId).then(() => {
      setSavedMovies((state) => state.filter((m) => m.movieId !== movieId));
      setResultMovies((state) => state.filter((m) => m.movieId !== movieId));
  }).catch(err => console.log(err));
  }

  function handleShortMovies(){
    setIsShortMovies(!isShortMovies);
  }

  function handleSubmit(keyword){

    setIsPreloaderVisible(true);
    clearMovies();

    const filteredData = getMatchedFilms(savedMovies, keyword, isShortMovies);
    setIsPreloaderVisible(false);
    if (filteredData.length!==0){
      localStorage.setItem('savedMovies', JSON.stringify(filteredData));
      setIsEmptyResults(false);
      setResultMovies(filteredData);
      console.log(filteredData)
    } else {
      setIsEmptyResults(true);
    }
  }

  return (
    <>
    <Header isLanding={false}/>

    <SearchForm onSubmit={ handleSubmit } 
    isShortMovies={ isShortMovies }
    onShortMovies={ handleShortMovies }/>
    <MoviesCardList isSaved={true}
    movies={resultMovies}
    isPreloaderVisible={isPreloaderVisible}
    onRemove={handleRemoveMovie}
    isEmptyResults={isEmptyResults}
    />

    <Footer/>
    </>
  );
}

export default SavedMovies;