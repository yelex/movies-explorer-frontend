import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import BtnMore from '../ui/BtnMore/BtnMore';
import Preloader from '../Preloader/Preloader';
import PopupError from '../PopupError/PopupError';

function MoviesCardList(props) {

  const [ errorMessage, setErrorMessage ] = React.useState('');
  const [ isErrorPopupOpened, setIsErrorPopupOpened ] = React.useState(false);

  React.useEffect(()=>{
    if (errorMessage!==""){
      setIsErrorPopupOpened(true)
    }
  },[errorMessage])

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        setIsErrorPopupOpened(false);
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [])

  function setupErrorMessage(text){
    setErrorMessage(text)
  }

  function openErrorPopup(){
    setIsErrorPopupOpened(true);
  }

  function handleClosePopup(evt){
    if (evt.target.classList.contains('popup_opened')||evt.target.classList.contains('popup__close-btn')) {
      setIsErrorPopupOpened(false);
      setErrorMessage('');
    };
  }

  return (
    <section className="movies">
      
      <ul className={`movies__list ${props.isSaved ? 'movies__list_saved' : ''}`}>
      {props.movies.length!==0 
      && props.movies.map(movie => {

        return (!props.isSaved ? <MoviesCard
          key={movie.id}
          movie={movie}
          isLiked={props.savedMoviesIds.includes(movie.id)}
          setupErrorMessage={setupErrorMessage}
          openErrorPopup={openErrorPopup}
          isSaved={false}/> 
          : <MoviesCard
          key={movie.id}
          movie={movie}
          onRemove={props.onRemove}
          setupErrorMessage={setupErrorMessage}
          openErrorPopup={openErrorPopup}
          isSaved={true}/>)})}
      {props.isEmptyResults && 
      <h1 className="movies__empty-results">Нет результатов</h1>}
      </ul>
      { !props.isSaved && props.isMoreBtnVisible &&
      <BtnMore onClick={props.onMore}/>
      }
      { props.isPreloaderVisible && <Preloader/>}
      <PopupError onClose={ handleClosePopup } 
                  message={errorMessage} 
                  isOpen={isErrorPopupOpened}/>
      
    </section>
  );
}

export default MoviesCardList;