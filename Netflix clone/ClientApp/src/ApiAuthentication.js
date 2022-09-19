
export const API_KEY = "api_key=5fb1aa9102ccbfe5368d8e66c2cec14d";
export const BASE_URL = "https://api.themoviedb.org/3";
export const Popular_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
export const Kids_URL = `${BASE_URL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${API_KEY}`;
export const Drama_URL = `${BASE_URL}/discover/movie?with_genres=18&primary_release_year=2021&${API_KEY}`;
export const Poster_URL = `${BASE_URL}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&${API_KEY}`;
/*export const Poster_URL = `${BASE_URL}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&${API_KEY}`;*/

