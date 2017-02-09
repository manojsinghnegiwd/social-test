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
						activities: data.slice(0, 50)
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

export function like (id) {
	return dispatch => {
		dispatch({
			type: actionTypes.LIKE_ACTIVITY,
			id
		})
	}
}


export function unlike (id) {
	return dispatch => {
		dispatch({
			type: actionTypes.UNLIKE_ACTIVITY,
			id
		})
	}
}

export function submitReply (reply, id) {
	return dispatch => {
		dispatch({
			type: actionTypes.ADD_REPLY,
			id,
			reply
		})
	}
}

export function sortChannels () {
	return dispatch => {
		dispatch({
			type: actionTypes.SORT_CHANNELS
		})
	}
}

export function getPopularActivities (limit) {
	return dispatch => {
		dispatch({
			type: actionTypes.GET_POPULAR_ACTIVITIES,
			limit
		})
	}
}

export function getMostLiked () {
	return dispatch => {
		dispatch({
			type: actionTypes.GET_MOST_LIKED
		})
	}
}

export function getMostCommented () {
	return dispatch => {
		dispatch({
			type: actionTypes.GET_MOST_COMMENTED
		})
	}
}

export function getMostShared () {
	return dispatch => {
		dispatch({
			type: actionTypes.GET_MOST_SHARED
		})
	}
}