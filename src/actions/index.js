import axios from 'axios';
import { MOVIES_LIST, TVSHOW_LIST } from './types';

import { api, topTvShowsApi, topMoviesApi, moviesSearchApi, tvShowsSearchApi } from '../TVAPI/apis';

export const fetchMoviesList = () => async (dispatch) => {
	const res = await axios.get(`${api}${topMoviesApi}`);
	dispatch({ type: MOVIES_LIST, payload: res.data });
};

export const searchMovies = (value) => async (dispatch) => {
	const res = await axios.get(`${api}${moviesSearchApi}&query=${value}`);
	dispatch({ type: MOVIES_LIST, payload: res.data });
};

export const fetchTvShowsList = () => async (dispatch) => {
	const res = await axios.get(`${api}${topTvShowsApi}`);
	dispatch({ type: TVSHOW_LIST, payload: res.data });
};

export const searchTVShows = (value) => async (dispatch) => {
	const res = await axios.get(`${api}${tvShowsSearchApi}&query=${value}`);
	dispatch({ type: TVSHOW_LIST, payload: res.data });
};
