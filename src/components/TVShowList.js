import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'use-lodash-debounce';

import { fetchTvShowsList, searchTVShows } from '../actions/index';

const TVShowsList = (props) => {
	const dispatch = useDispatch();
	const tvShowsList = useSelector((state) => state.resources.tvShowsList);

	const { value, setTabView, setCurrentDetails, setPreviousTab } = props;

	const debounceValue = useDebounce(value, 1000);

	useEffect(
		() => {
			if (debounceValue === '' || debounceValue.length < 3) {
				dispatch(fetchTvShowsList());
			} else {
				dispatch(searchTVShows(debounceValue));
			}
		},
		[ dispatch, debounceValue ]
	);

	const renderList = () => {
		return (
			tvShowsList.results &&
			tvShowsList.results.slice(9, 19).map((tvShow) => {
				return (
					<ul key={tvShow.id}>
						<li
							onClick={() => {
								setTabView('DETAILS');
								setCurrentDetails(tvShow);
								setPreviousTab('TV');
							}}
						>
							{tvShow.name}
						</li>
					</ul>
				);
			})
		);
	};

	return <div>{renderList()}</div>;
};

export default TVShowsList;
