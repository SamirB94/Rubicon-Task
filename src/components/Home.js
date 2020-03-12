import React, { useState } from 'react';
import MoviesList from './MoviesList';
import TVShowList from './TVShowList';
import Details from './Details';

import '../style.css';

const TAB_SCREENS = {
	TV: 'TV',
	MOVIE: 'MOVIE',
	DETAILS: 'DETAILS'
};

const onClickBack = (setTabView, previousTab) => {
	return (
		<div className="space">
			<input
				type="image"
				className="btnBack"
				src="/popback.png"
				alt="Submit"
				width="48"
				height="48"
				onClick={() => setTabView(previousTab === TAB_SCREENS.MOVIE ? TAB_SCREENS.MOVIE : TAB_SCREENS.TV)}
			/>
		</div>
	);
};

const renderTab = (tabView, setTabView, search, setCurrentDetails, currentDetails, previousTab, setPreviousTab) => {
	switch (tabView) {
		case TAB_SCREENS.MOVIE:
			return (
				<MoviesList
					setTabView={setTabView}
					value={search}
					setCurrentDetails={setCurrentDetails}
					setPreviousTab={setPreviousTab}
				/>
			);
		case TAB_SCREENS.DETAILS:
			return <Details currentDetails={currentDetails} previousTab={previousTab} />;
		default:
			return (
				<TVShowList
					setTabView={setTabView}
					value={search}
					setCurrentDetails={setCurrentDetails}
					setPreviousTab={setPreviousTab}
				/>
			);
	}
};

const Home = () => {
	const [ tabView, setTabView ] = useState(TAB_SCREENS.TV);
	const [ search, setSearch ] = useState('');
	const [ currentDetails, setCurrentDetails ] = useState(null);
	const [ previousTab, setPreviousTab ] = useState(null);

	return (
		<div className="container">
			{tabView === TAB_SCREENS.DETAILS ? (
				onClickBack(setTabView, previousTab)
			) : (
				<React.Fragment>
					<button
						className="listBtn"
						onClick={() => {
							setTabView(TAB_SCREENS.TV);
							setPreviousTab(TAB_SCREENS.TV);
						}}
					>
						TV Shows List
					</button>
					<button
						className="listBtn movie"
						onClick={() => {
							setTabView(TAB_SCREENS.MOVIE);
							setPreviousTab(TAB_SCREENS.MOVIE);
						}}
					>
						Movies List
					</button>
					<input
						className="search"
						name="search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search..."
					/>
				</React.Fragment>
			)}

			{renderTab(tabView, setTabView, search, setCurrentDetails, currentDetails, previousTab, setPreviousTab)}
		</div>
	);
};

export default Home;
