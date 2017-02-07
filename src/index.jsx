import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {AppContainer} from './components/App';
import {ActivitiesPage} from './containers';
import {compose, createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

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