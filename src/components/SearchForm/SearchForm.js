import './SearchForm.css';
import React from 'react';

function SearchForm(props) {

  const [keyword, setKeyword ] = React.useState('');

  function handleChange(evt){
    setKeyword(evt.target.value);
  }

  function handleSubmit(evt){
    evt.preventDefault();
    props.onSubmit(keyword);
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form name="search-form" action="#" 
              className="search-form__form"
              onSubmit={handleSubmit}
              >
          <div className="search-form__input-container">
            <input value={ keyword } 
                          className="search-form__input" 
                          id="search-form" name="search-form" type="text" 
                          placeholder="Фильм"
                          onChange={handleChange}
                          required/>
            <button type="submit" className="search-form__submit-btn">
            </button>
          </div>
        </form>
        <div className="search-form__short-container">
          <div 
          className={`search-form__btn-container ${props.isShortMovies ? '' : 'search-form__btn-container_deactivated'}`} 
          onClick={props.onShortMovies}>
            <button type="button" 
            className={`search-form__tumb-btn ${props.isShortMovies ? '' : 'search-form__tumb-btn_deactivated'}`}></button>
          </div>
          <p className="search-form__label">Короткометражки</p>
        </div>
      </div>

    </section>

  );
}

export default SearchForm;