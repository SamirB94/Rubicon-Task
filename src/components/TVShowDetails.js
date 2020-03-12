import React from 'react';

const TVShowDetails = ({ currentDetails }) => {
	const { poster_path, video, first_air_date, name, vote_average, overview } = currentDetails;

	const renderTVShowPoster = () => {
		if (video) {
			return <div>{video}</div>;
		}
		return <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} alt="Movie Poster" />;
	};

	let date;
	if (first_air_date) {
		const split = first_air_date.split('-');
		date = split[0];
	}

	return (
		<div className="detail-container">
			<div className="img-video">{renderTVShowPoster()}</div>
			<h1 className="title">
				{name} ({date})
			</h1>
			<h3 className="rating">Rating: {vote_average}</h3>
			<p className="desc">{overview}</p>
		</div>
	);
};

export default TVShowDetails;
