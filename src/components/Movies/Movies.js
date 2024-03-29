import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { getSavedMovies } from '../../utils/MainApi';
import { getAllMovies } from '../../utils/MoviesApi';
import { getFirstExtraRow, getMatchedFilms } from '../../utils/utils';


function Movies(props) {
  const [ allMovies, setAllMovies ] = React.useState([]);
  const [ resultMovies, setResultMovies ] = React.useState([]);
  const [ visibleMovies, setVisibleMovies ] = React.useState([]);
  const [ isPreloaderVisible, setIsPreloaderVisible ] = React.useState(false);
  const [ isEmptyResults, setIsEmptyResults ] = React.useState(false);
  const [ isMoreBtnVisible, setIsMoreBtnVisible ] = React.useState(false);
  const [ isShortMovies, setIsShortMovies ] = React.useState(false);
  const [ firstCards, setFirstCards ] = React.useState(0);
  const [ extraCards, setExtraCards ] = React.useState(0);
  const [ savedMoviesIds, setSavedMoviesIds ] = React.useState([]);
  const [ keyword, setKeyword ] = React.useState('');

  React.useEffect(()=>{
    getSavedMovies().then(savedMovies => {
      setSavedMoviesIds(savedMovies.map(movie => {
        return movie.movieId
      }))
    })
  }, [resultMovies])

  React.useEffect(()=>{
    setAllInitialMovies()
  },[])

  React.useEffect(()=>{
    window.addEventListener('resize', setFirstExtraRow)
    return () => {
      window.removeEventListener('resize', setFirstExtraRow)
    }
  })

  React.useEffect(()=>{
    const localKeyword = localStorage.getItem('keyword');
    const localMovies = localStorage.getItem('resultMovies');
    const localIsShortMovies = localStorage.getItem('isShortMovies');

    if (localKeyword && localMovies && localIsShortMovies){
      setKeyword(localKeyword);
      setResultMovies(JSON.parse(localMovies));
      setIsShortMovies(localIsShortMovies==="true")
    } else {
      setResultMovies(allMovies)
    }

    setFirstExtraRow();
  }, [allMovies])

  React.useEffect(()=>{
    setVisibleMovies(resultMovies.slice(0,firstCards))
  }, [resultMovies]);

  function setFirstExtraRow(){
    const width = window.innerWidth;
    const numRows = getFirstExtraRow(width);
    setFirstCards(numRows['first']);
    setExtraCards(numRows['extra']);
  }

  React.useEffect(()=>{
    if (visibleMovies.length < resultMovies.length){
      setIsMoreBtnVisible(true)
    } else {
      setIsMoreBtnVisible(false)
    }
  }, [visibleMovies])

  function clearMovies(){
    localStorage.removeItem('resultMovies');
    setResultMovies([]);
    setIsMoreBtnVisible(false);
  }

  function setAllInitialMovies(){
    setIsPreloaderVisible(true);
    getAllMovies().then(data=>{
      setIsPreloaderVisible(false);
      setAllMovies(data);
    })
  }

  function updateResults(keyword, isShortMovies){
    clearMovies();
    props.setupIsDisabledForm(true);
    const filteredData = getMatchedFilms(allMovies, keyword, isShortMovies);
    if (filteredData.length!==0){
      localStorage.setItem('resultMovies', JSON.stringify(filteredData));
      setIsEmptyResults(false);
      setResultMovies(filteredData);
    } else {
      setIsEmptyResults(true);
    }
    props.setupIsDisabledForm(false);
  }

  function handleMore(){
    let count = visibleMovies.length;
    const newCount = Math.min(resultMovies.length, count+=extraCards);
    setVisibleMovies(resultMovies.slice(0, newCount));
  }

  function handleShortMovies(){
    setIsShortMovies(!isShortMovies);
    updateResults(keyword, !isShortMovies);
    localStorage.setItem('isShortMovies', !isShortMovies);
  }

  function handleSubmit(keyword){
    clearMovies();
    localStorage.setItem('keyword', keyword);
    setKeyword(keyword);
    updateResults(keyword, isShortMovies);
  }

  return (
    <>
    <Header isLanding={false}/>

    <SearchForm onSubmit={handleSubmit} 
    isShortMovies={ isShortMovies }
    onShortMovies={ handleShortMovies }
    isDisabledForm={ props.isDisabledForm }/>

    <MoviesCardList isSaved={false} 
                    isEmptyResults={isEmptyResults} 
                    movies={visibleMovies}
                    savedMoviesIds={savedMoviesIds}
                    isPreloaderVisible={isPreloaderVisible}
                    isMoreBtnVisible={isMoreBtnVisible}
                    onMore={handleMore}/>
    <Footer/>
    </>
  );
}

export default Movies;