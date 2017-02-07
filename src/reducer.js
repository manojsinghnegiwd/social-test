import {Map} from 'immutable';

function setState(state, newState) {
	return state.merge(newState);
}

function changeColor(state, color) {
	return state.set('textColor', color);
}

export default function (state = Map(), action) {
	switch(action.type) {
		case 'SET_STATE':
			return setState(state, action.state);
		case 'CHANGE_COLOR':
			return changeColor(state, action.color);
	}
}