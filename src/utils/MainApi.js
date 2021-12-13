import { getResponseData } from './utils';

export const BASE_URL = 'http://localhost:3001';

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

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  .then((res) => {
    return getResponseData(res); 
    // сначала на бэке отработает 
    // мидлвара auth, которая вернет 401 если 
    // пользователь неавторизован, потом отработает 
    // метод getInfoAboutMe, который вернет {
    //   name, _id, email
    // }
  })
  .then(data => data)
}