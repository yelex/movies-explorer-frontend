import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { getAllMovies } from '../../utils/MoviesApi';
import { getFirstExtraRow, getMatchedFilms } from '../../utils/utils';


function Movies() {
  const [ movies, setMovies ] = React.useState([]);
  const [ renderedMovies, setRenderedMovies ] = React.useState([]);
  const [ isPreloaderVisible, setIsPreloaderVisible ] = React.useState(false);
  const [ isEmptyResults, setIsEmptyResults ] = React.useState(false);
  const [ isMoreBtnVisible, setIsMoreBtnVisible ] = React.useState(false);
  const [ isShortMovies, setIsShortMovies ] = React.useState(false);
  const [ firstCards, setFirstCards ] = React.useState(0);
  const [ extraCards, setExtraCards ] = React.useState(0);

  React.useEffect(()=>{
    if (localStorage.getItem('movies')){
      console.log('im here')
      setMovies(JSON.parse(localStorage.getItem('movies')))
    }
    setFirstExtraRow();
  }, [])

  React.useEffect(()=>{
    window.addEventListener('resize', setFirstExtraRow)
    return () => {
      window.removeEventListener('resize', setFirstExtraRow)
    }
  })

  React.useEffect(()=>{
    setRenderedMovies(movies.slice(0,firstCards))
  }, [movies]);

  function setFirstExtraRow(){
    const width = window.innerWidth;
    const numRows = getFirstExtraRow(width);
    setFirstCards(numRows['first']);
    setExtraCards(numRows['extra']);
  }

  React.useEffect(()=>{
    if (renderedMovies.length<movies.length){
      setIsMoreBtnVisible(true)
    } else {
      setIsMoreBtnVisible(false)
    }
  }, [renderedMovies])

  function clearMovies(){
    localStorage.removeItem('movies');
    setMovies([]);
    setIsMoreBtnVisible(false);
  }

  function handleMore(){
    let count = renderedMovies.length;
    const newCount = Math.min(movies.length, count+=extraCards);
    setRenderedMovies(movies.slice(0, newCount));
  }

  function handleShortMovies(){
    setIsShortMovies(!isShortMovies);
  }

  function handleSubmit(keyword){

    setIsPreloaderVisible(true);
    clearMovies();
    getAllMovies().then(data => {
      setIsPreloaderVisible(false);
      const filteredData = getMatchedFilms(data, keyword, isShortMovies);
      if (filteredData.length!==0){
        localStorage.setItem('movies', JSON.stringify(filteredData));
        setIsEmptyResults(false);
        setMovies(filteredData);
      } else {
        setIsEmptyResults(true);
      }}).catch(err => console.log(err));
  }

  return (
    <>
    <Header isLanding={false}/>

    <SearchForm onSubmit={handleSubmit} 
    isShortMovies={ isShortMovies }
    onShortMovies={handleShortMovies}/>

    <MoviesCardList isSaved={false} 
                    isEmptyResults={isEmptyResults} 
                    movies={renderedMovies} 
                    isPreloaderVisible={isPreloaderVisible}
                    isMoreBtnVisible={isMoreBtnVisible}
                    onMore={handleMore}/>
    <Footer/>
    </>
  );
}

export default Movies;