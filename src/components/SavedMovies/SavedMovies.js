import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { getSavedMovies, removeMovieFromSaved } from '../../utils/MainApi';
import { getMatchedFilms } from '../../utils/utils';

function SavedMovies(props) {

  const [ savedMovies, setSavedMovies ] = React.useState([]);
  const [ isPreloaderVisible, setIsPreloaderVisible ] = React.useState(false);
  const [ resultMovies, setResultMovies ] = React.useState([]);
  const [ isEmptyResults, setIsEmptyResults ] = React.useState(false);
  const [ isShortMovies, setIsShortMovies ] = React.useState(false);
  const [ keyword, setKeyword ] = React.useState('');

  React.useEffect(()=>{
    setIsPreloaderVisible(true);
    getSavedMovies().then(savedMovies => {
      setIsPreloaderVisible(false);
      setSavedMovies(savedMovies)
      setResultMovies(savedMovies)
    })
  }, [])

  function clearMovies(){
    setResultMovies([]);
  }

  function updateResults(keyword, isShortMovies){
    props.setupIsDisabledForm(true);
    const filteredData = getMatchedFilms(savedMovies, keyword, isShortMovies);
    if (filteredData.length!==0){
      setIsEmptyResults(false);
      setResultMovies(filteredData);
      console.log(filteredData)
    } else {
      setResultMovies([]);
      setIsEmptyResults(true);
    }
    props.setupIsDisabledForm(false);
  }

  function handleRemoveMovie(movieId){
    removeMovieFromSaved(movieId).then(() => {
      setSavedMovies((state) => state.filter((m) => m.movieId !== movieId));
      setResultMovies((state) => state.filter((m) => m.movieId !== movieId));
  }).catch(err => console.log(err));
  }

  function handleShortMovies(){
    setIsShortMovies(!isShortMovies);
    updateResults(keyword, !isShortMovies);
  }

  function handleSubmit(keyword){
    clearMovies();
    setKeyword(keyword);
    updateResults(keyword, isShortMovies);
  }

  return (
    <>
    <Header isLanding={false}/>

    <SearchForm onSubmit={ handleSubmit } 
    isShortMovies={ isShortMovies }
    onShortMovies={ handleShortMovies }
    isDisabledForm={ props.isDisabledForm }/>
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