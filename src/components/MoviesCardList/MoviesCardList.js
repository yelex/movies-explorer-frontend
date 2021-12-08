import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import BtnMore from '../ui/BtnMore/BtnMore';
import { getAllMovies } from '../../utils/MoviesApi';

function MoviesCardList(props) {
  const [ movies, setMovies ] = React.useState([]);

  React.useEffect(()=>{
    getAllMovies().then(data => {
      console.log('im here')
      setMovies(data);
    })
  }, [])

  return (
    <section className="movies">
      {movies &&
      (
      <ul className={`movies__list ${props.isSaved ? 'movies__list_saved' : ''}`}>
        {movies.map(movie => {

        return <MoviesCard 
          key={movie.id} 
          title={movie.nameRU}
          imageUrl={`https://api.nomoreparties.co${movie.image.url}`}
          duration={movie.duration}
          trailerLink={movie.trailerLink}/>
      })}
      </ul>
      )
      }
      { !props.isSaved && 
      <BtnMore/>
      }
    </section>
  );
}

export default MoviesCardList;