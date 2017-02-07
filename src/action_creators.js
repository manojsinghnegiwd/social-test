import * as actionTypes from './actionTypes';
import axios from 'axios';

export function getActivities () {
	return dispatch => {
		axios.get('https://nuvi-challenge.herokuapp.com/activities')
			.then(res => {
				const {status, data} = res;
				if(status === 200) {
					dispatch({
						type: actionTypes.STOP_FETCHING_LOADING,
					});
					dispatch({
						type: actionTypes.UPDATE_ACTIVITIES,
						activities: data
					});
				}
			});
	}
}

export function startFetchingActivities () {
	return dispatch => {
		dispatch({
			type: actionTypes.START_FETCHING_LOADING,
		});
	}
}

export function stopFetchingActivities () {
	return dispatch => {
		dispatch({
			type: actionTypes.STOP_FETCHING_LOADING,
		});
	}
}