import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {AppContainer} from './components/App';
import {compose, createStore} from 'redux';

const createStoreDevTools = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

store.dispatch({
	type: 'SET_STATE',
	state: {
		message: 'Enjoy Immutable , React and redux & click me to change my color',
		textColor: 'black'
	}
});

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('app')
);