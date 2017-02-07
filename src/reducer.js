import {Map} from 'immutable';
import * as actionTypes from './actionTypes';

function setState(state, newState) {
	return state.merge(newState);
}

function updateActivities(state, activities) {
	return state.set('activities', activities);
}

export default function (state = Map(), action) {
	switch(action.type) {
		case actionTypes.SET_STATE:
			return setState(state, action.state);
		case actionTypes.UPDATE_ACTIVITIES:
			return updateActivities(state, action.activities);
		case actionTypes.START_FETCHING_LOADING:
			return state.set('fetchingActivities', true);
		case actionTypes.STOP_FETCHING_LOADING:
			return state.set('fetchingActivities', false);
	}
}