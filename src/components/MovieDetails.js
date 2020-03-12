import React from 'react';

const MovieDetails = ({ currentDetails }) => {
	const { title, vote_average, video, poster_path, release_date, overview } = currentDetails;

	const renderMoviePoster = () => {
		if (video) {
			return <div>{video}</div>;
		} else if (poster_path === null) {
			return <div>NO POSTER AVAILABLE</div>;
		} else {
			return <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} alt="Movie Poster" />;
		}
	};

	let date;
	if (release_date) {
		const split = release_date.split('-');
		date = split[0];
	}

	return (
		<div className="detail-container">
			<div className="img-video">{renderMoviePoster()}</div>
			<h1 className="title">
				{title} ({date})
			</h1>
			<h3 className="rating">Rating: {vote_average}</h3>
			<p className="desc">{overview}</p>
		</div>
	);
};

export default MovieDetails;
