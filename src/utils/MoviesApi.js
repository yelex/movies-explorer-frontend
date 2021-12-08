import { getResponseData } from "./utils";

export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const getAllMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
  })
  .then((res) => {
    return getResponseData(res);
  })
  .then((res) => {
    return res;
  })
};