import * as actionTypes from './actionTypes';

export function changeColor(color) {
	return (dispatch) => {
		dispatch({
			type: actionTypes.UPDATE_ACTIVITIES,
			color
		})
	}
}