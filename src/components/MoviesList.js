import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'use-lodash-debounce';

import { fetchMoviesList, searchMovies } from '../actions/index';

const MoviesList = (props) => {
	const dispatch = useDispatch();
	const moviesList = useSelector((state) => state.resources.moviesList);

	const { value, setTabView, setCurrentDetails, setPreviousTab } = props;

	const debounceValue = useDebounce(value, 1000);

	useEffect(
		() => {
			if (debounceValue === '' || debounceValue.length < 3) {
				dispatch(fetchMoviesList());
			} else {
				dispatch(searchMovies(debounceValue));
			}
		},
		[ dispatch, debounceValue ]
	);

	const renderList = () => {
		return (
			moviesList.results &&
			moviesList.results.slice(9, 19).map((movie) => {
				const { id, title } = movie;
				return (
					<ul key={id}>
						<li
							onClick={() => {
								setTabView('DETAILS');
								setCurrentDetails(movie);
								setPreviousTab('MOVIE');
							}}
						>
							{title}
						</li>
					</ul>
				);
			})
		);
	};

	return <div>{renderList()}</div>;
};

export default MoviesList;
