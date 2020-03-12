import { MOVIES_LIST, TVSHOW_LIST } from '../actions/types';

const INITIAL_STATE = {
	tvShowsList: [],
	moviesList: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TVSHOW_LIST:
			return { ...state, tvShowsList: action.payload };
		case MOVIES_LIST:
			return { ...state, moviesList: action.payload };
		default:
			return state;
	}
};
