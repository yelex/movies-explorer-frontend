import { getResponseData } from './utils';

export const BASE_URL = 'https://api.yellex.nomoredomains.work';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password}),
    credentials: 'include',
  })
  .then((res) => {
    return getResponseData(res);
  })
  .then((res) => {
    return res;
  })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password}),
    credentials: 'include'
  }).then(res => {
    return getResponseData(res)})
};

export const getInfoAboutMe = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  .then((res) => {
    return getResponseData(res); 
  })
  .then(data => data)
}

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
  .then((res) => {
    return res;
  })
};

export const updateInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email}),
    credentials: 'include'
  }).then(res => {
    return getResponseData(res)})
};

export const addMovieToSaved = ({country, director, duration, year,
  description, image, trailer, nameRU, nameEN, thumbnail, movieId})=>{
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      nameRU,
      nameEN,
      thumbnail,
      movieId}),
    credentials: 'include'
  }).then(res => {
    return getResponseData(res)})
  .then(data => data)
}

export const removeMovieFromSaved = (movieId)=>{

  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then(res => {
    return getResponseData(res)})
  .then(data => data)
}

export const getSavedMovies = ()=>{
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then(res => {
    return getResponseData(res)})
  .then(data => data)
}
