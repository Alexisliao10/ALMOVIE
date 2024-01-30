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

export async function getApiData(url, entry = null) {
  const { data } = await api(url);
  console.log("got data " + url);
  if (entry) {
    return data[entry];
  } else {
    return data;
  }
}

// data
export const trendMovies = getApiData("trending/movie/day", "results");
export const trendSeries = getApiData("trending/tv/day", "results");
export const genresMovieList = getApiData("genre/movie/list", "genres");
export const genresSeriesList = getApiData("genre/tv/list", "genres");
export async function getDirector(id, type = "movie") {
  try {
    const res = await getApiData(`${type}/${id}/credits`, "crew");
    const data = res.filter(({ job }) => job === "Director");
    return data[0].name;
  } catch (error) {
    console.log("No movie Found" + error.message);
  }
}
export async function getMovieDetails(id) {
  const res = await getApiData(`movie/${id}`);
  return res;
}
// testing
(async () => {
  const res1 = await getMovieDetails(572802);
  console.log(res1);
})();
