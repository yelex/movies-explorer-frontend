import { MOBILE_WIDTH, TAB_WIDTH, DESKTOP_WIDTH, 
        SHORT_MOVIES_DURATION, FIRST_EXTRA_DESKTOP, 
        FIRST_EXTRA_MOBILE, FIRST_EXTRA_TAB } from "./constants";

export const getResponseData = (res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then(message => {return Promise.reject(message)})
}

export const extractTime = (numberMins) => {
    const hours = (numberMins / 60).toFixed(0)
    const minutes = numberMins % 60
    return `${hours}ч ${minutes}м`
}

export const getFirstExtraRow = (width)=>{
  if ((MOBILE_WIDTH <= width) && (width < TAB_WIDTH)){
    return FIRST_EXTRA_MOBILE
  }
  if ((TAB_WIDTH <= width) && (width < DESKTOP_WIDTH)){
    return FIRST_EXTRA_TAB
  }
  return FIRST_EXTRA_DESKTOP
}

export const getMatchedFilms = (data, keyword, isShortMovies)=>{
  const regexp = new RegExp(keyword,'i');
  if (keyword!==''){
    const movies = data.filter(movie => movie['nameRU'].search(regexp)!==-1);
    return (isShortMovies ? movies.filter(movie => movie['duration']<=SHORT_MOVIES_DURATION) : movies)
  } else {
    return (isShortMovies ? data.filter(movie => movie['duration']<=SHORT_MOVIES_DURATION) : data)
  }
}