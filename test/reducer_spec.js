import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
	it('handles SET_STATE with plain JS payload', () => {
		const initialState = Map();
		const action = {
			type: 'SET_STATE',
			state: Map({
				message: 'Enjoy Immutable , React and redux & click me to change my color',
				textColor: 'black'
			})
		};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			message: 'Enjoy Immutable , React and redux & click me to change my color',
			textColor: 'black'
		}));
	});

	it('handles SET_STATE without initialState', () => {
		const action = {
			type: 'SET_STATE',
			state: Map({
				message: 'Enjoy Immutable , React and redux & click me to change my color',
				textColor: 'black'
			})
		}
		const nextState = reducer(undefined, action);

		expect(nextState).to.equal(fromJS({
			message: 'Enjoy Immutable , React and redux & click me to change my color',
			textColor: 'black'
		}));
	});

	it('handles CHANGE_COLOR by changing text color', () => {
		const initialState = fromJS({
	    	message: 'Enjoy Immutable , React and redux & click me to change my color',
			textColor: 'black'
	    });

	    const action = {
	    	type: 'CHANGE_COLOR',
	    	color: 'red'
	    }

	    const nextState = reducer(initialState, action);

	    expect(nextState).to.equal(fromJS({
	    	message: 'Enjoy Immutable , React and redux & click me to change my color',
			textColor: 'red'
	    }));
	});
});