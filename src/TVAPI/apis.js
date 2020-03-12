const API_KEY = 'c3fae3bdf1cfb4dafb9feab9be6bb579';
export const api = `https://api.themoviedb.org/3/`;
export const topMoviesApi = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const topTvShowsApi = `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1
`;
export const moviesSearchApi = `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
export const tvShowsSearchApi = `search/tv?api_key=${API_KEY}&language=en-US&page=1`;
