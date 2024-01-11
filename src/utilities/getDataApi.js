import axios, { isCancel, AxiosError } from "axios";
import API_KEY from "../apiKey.js";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

// API requests

export async function getApiData(url, type = "results") {
  const { data } = await api(url);
  return data[type];
}

// data
export const trendMovies = getApiData("trending/movie/day");
export const trendSeries = getApiData("trending/tv/day");
export const genresMovieList = getApiData("genre/movie/list", "genres");
export const genresSeriesList = getApiData("genre/tv/list", "genres");
