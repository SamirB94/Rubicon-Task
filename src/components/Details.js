import React from 'react';
import MovieDetails from './MovieDetails';
import TVShowDetails from './TVShowDetails';

const Details = ({ currentDetails, previousTab }) => {
	return (
		<div>
			{previousTab === 'TV' ? (
				<TVShowDetails currentDetails={currentDetails} />
			) : (
				<MovieDetails currentDetails={currentDetails} />
			)}
		</div>
	);
};

export default Details;
