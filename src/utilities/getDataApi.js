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

// trends
export const trendMovies = getApiData("trending/movie/day", "results");
export const trendMoviesByPage = async (page) => {
  const { data } = await api("trending/movie/day", {
    params: {
      page,
    },
  });
  return data;
};
export const trendSeries = getApiData("trending/tv/day", "results");
// popular
export const popularMovies = getApiData("movie/popular", "results");
// upcoming
export const upcomingMovies = getApiData("movie/upcoming", "results");
// genres Lists
export const genresMovieList = getApiData("genre/movie/list", "genres");
export const genresSeriesList = getApiData("genre/tv/list", "genres");
export const genreList = await getGenreList();
// credits
export async function getDirector(id, type = "movie") {
  try {
    const res = await getApiData(`${type}/${id}/credits`, "crew");
    const data = res.filter(({ job }) => job === "Director");
    return data[0].name;
  } catch (error) {
    console.log("No movie Found " + error.message);
  }
}
// details
export async function getMovieDetails(id) {
  const res = await getApiData(`movie/${id}`);
  return res;
}
// searchMovie
export async function searchMoviesAPI(query, page) {
  const { data } = await api("search/movie", {
    params: {
      query,
      page,
    },
  });
  return data;
}

// functions

async function getGenreList() {
  const movieArr = await genresMovieList;
  const seriesArr = await genresSeriesList;
  const combinedArr = movieArr.concat(seriesArr);

  const uniqueId = combinedArr.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id),
  );
  return uniqueId;
}

// testing
// (async () => {
//   const res1 = await searchMoviesAPI("avenger", 1);
//   console.log("🚀 ~ res1:", res1);
// })();
