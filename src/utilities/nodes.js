const $ = (selector) => document.querySelector(selector);

// header
export const hamMenu = $("nav .hamMenu");
export const hamIcon = $(".hamMenu .fa-bars");
export const quitIcon = $(".hamMenu .fa-xmark");
export const menu = $("main div ul");

// main
export const navHome = $("#navHome");
export const navSeries = $("#navSeries");
export const navMovies = $("#navMovies");
export const navNewRelease = $("#navNewRelease");
export const moviesContainer = $("#previewCards-container");
export const articleContainer = $("#trendMovies");
export const divContainer = $("main > div");
export const inputContainer = $("main > div > div");
export const sectionTrending = $("main > section");
export const sectionTitle = $("main > section > h1");

// section more details
export const moreDetailsView = $("#moreDetails");
