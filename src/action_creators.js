import * as actionTypes from './actionTypes';
import axios from 'axios';

export function getActivities () {
	return dispatch => {
		axios.get('https://nuvi-challenge.herokuapp.com/activities')
			.then(res => {
				const {status, data} = res;
				if(status === 200) {
					dispatch({
						type: actionTypes.UPDATE_ACTIVITIES,
						activities: data
					});
				}
			});
	}
}