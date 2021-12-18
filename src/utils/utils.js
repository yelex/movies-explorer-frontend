import { MOBILE_WIDTH, TAB_WIDTH, DESKTOP_WIDTH } from "./constants";

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
    return {first: 5, extra: 2}
  }
  if ((TAB_WIDTH <= width) && (width < DESKTOP_WIDTH)){
    return {first: 8, extra: 2}
  }
  return {first: 12, extra: 3}
}

export const getMatchedFilms = (data, keyword, isShortMovies)=>{
  const regexp = new RegExp(keyword,'i');
  const movies = data.filter(movie => movie['nameRU'].search(regexp)!==-1);
  return (isShortMovies ? movies.filter(movie => movie['duration']<=40) : movies)
}