import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import BtnMore from '../ui/BtnMore/BtnMore';
import Preloader from '../Preloader/Preloader';
import { getAllMovies } from '../../utils/MoviesApi';

function MoviesCardList(props) {
  const [ movies, setMovies ] = React.useState([]);
  const [ isPreloaderVisible, setIsPreloaderVisible ] = React.useState(false)

  React.useEffect(()=>{
    // getAllMovies().then(data => {
    //   setMovies(data);
    // }).catch(err => console.log(err))
  }, [])

  return (
    <section className="movies">
      {movies.length!==0 
      && 
      (<ul className={`movies__list ${props.isSaved ? 'movies__list_saved' : ''}`}>
        {movies.map(movie => {

        return <MoviesCard 
          key={movie.id} 
          title={movie.nameRU}
          imageUrl={`https://api.nomoreparties.co${movie.image.url}`}
          duration={movie.duration}
          trailerLink={movie.trailerLink}/>
      })}
      </ul>)}
      { isPreloaderVisible && <Preloader/>}
      
      { !props.isSaved && 
      <BtnMore/>
      }
    </section>
  );
}

export default MoviesCardList;