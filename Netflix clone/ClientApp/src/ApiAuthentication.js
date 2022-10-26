
export const API_KEY = "api_key=5fb1aa9102ccbfe5368d8e66c2cec14d";
export const BASE_URL = "https://api.themoviedb.org/3";
export const Popular_URL = `${BASE_URL}/movie/popular?${API_KEY}&language=en-US&page=1`;
export const TV_URL = `${BASE_URL}/tv/popular?${API_KEY}&language=en-US&page=1`;
export const Kids_URL = `${BASE_URL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${API_KEY}`;
export const Drama_URL = `${BASE_URL}/discover/movie?with_genres=18&primary_release_year=2021&${API_KEY}`;
export const Poster_URL = `${BASE_URL}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&${API_KEY}`;
export const Showing_URL = `${BASE_URL}/discover/movie?primary_release_date.gte=2022-08-01&primary_release_date.lte=2022-08-29&${API_KEY}`;
export const Search_URL = `${BASE_URL}/search/movie?${API_KEY}`;
export const ActionAdventure_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=28,12&page=1`;
export const DramaGenre_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=18&page=2`;
export const Animation_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=16&page=2`;
export const Thriller_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=53&page=4`;
export const Horror_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=27&page=1`;
export const Family_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=10751&page=1`;
export const TvShows_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=99&page=2`;

export const Romance_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=10749&page=2`;
export const Musicals_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=10402&page=1`;
export const Comedy_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=35&page=8`;
export const Documentary_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=99&page=1`;
export const SciFi_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=878&page=1`;
export const War_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=10752&page=2`;
export const History_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=36&page=1`;
export const Crime_URL = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=80&page=1`;



//api_key=57983e31fb435df4df77afb854740ea9&amp;include_adult=true&amp;amp;query=\1$$4&amp;amp;language=$INFO[language]&lt;/url&gt;

///discover/movie?with_genres=18&primary_release_year=2022&
