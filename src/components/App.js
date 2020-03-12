import React from 'react';
import Home from './Home';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import MoviesList from './MoviesList';
import TVShowsList from './TVShowList';

const App = () => {
	return (
		<div className="top-container">
			<Router history={history}>
				<div>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/movies-list" exact component={MoviesList} />
						<Route path="/tvshows-list" exact component={TVShowsList} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
