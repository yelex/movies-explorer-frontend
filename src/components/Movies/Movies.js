import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { getAllMovies } from '../../utils/MoviesApi';

function Movies() {
  const [ movies, setMovies ] = React.useState([]);
  const [ isPreloaderVisible, setIsPreloaderVisible ] = React.useState(false)
  const [ isEmptyResults, setIsEmptyResults ] = React.useState(false)

  React.useEffect(()=>{
    if (localStorage.getItem('movies')){
      setMovies(JSON.parse(localStorage.getItem('movies')))
    }
  }, [])

  function handleSubmit(keyword){

    setIsPreloaderVisible(true);
    getAllMovies().then(data => {
      setIsPreloaderVisible(false);
      const filteredData = data.filter(val => val['nameRU'].includes(keyword));
      if (filteredData.length!==0 ){
        setIsEmptyResults(false);
        localStorage.setItem('movies', JSON.stringify(filteredData));
        setMovies(filteredData)
      } else {
        setMovies([]);
        setIsEmptyResults(true);
      }}).catch(err => console.log(err));
  }

  return (
    <>
    <Header isLanding={false}/>

    <SearchForm onSubmit={handleSubmit}/>
    <MoviesCardList isSaved={false} 
                    isEmptyResults={isEmptyResults} 
                    movies={movies} 
                    isPreloaderVisible={isPreloaderVisible}/>

    <Footer/>
    </>
  );
}

export default Movies;