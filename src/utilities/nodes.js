const $ = (selector) => document.querySelector(selector);

// header
export const hamMenu = $("nav .hamMenu");
export const hamIcon = $(".hamMenu .fa-bars");
export const quitIcon = $(".hamMenu .fa-xmark");
export const menu = $("main div ul");

// main
export const moviesContainer = $("main > section");
export const trendMoviesContainer = $("#trendMovies");
export const divContainer = $("main > div");
export const inputContainer = $("main > div > div");
export const sectionTrending = $("main > section");
export const sectionTitle = $("main > section > h1");
