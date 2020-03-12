import { combineReducers } from 'redux';
import mediaResourcesList from './mediaResources-reducer';

export default combineReducers({
	resources: mediaResourcesList
});
