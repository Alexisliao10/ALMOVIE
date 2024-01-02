import { api } from "./main.js";

export async function getTrendMovies(range = "day") {
  const { data } = await api(`trending/movie/${range}`);
  const trendMovies = data.results;
  return trendMovies;
}
