import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {AppContainer} from './components/App';
import {ActivitiesPage} from './containers';
import {compose, createStore} from 'redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

const createStoreDevTools = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

store.dispatch({
	type: 'SET_STATE',
	state: {
		activities: []
	}
});

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
	      <Route path="/" component={AppContainer}>
	      	<IndexRoute component={ActivitiesPage} />
	      </Route>
	    </Router>
	</Provider>,
	document.getElementById('app')
);