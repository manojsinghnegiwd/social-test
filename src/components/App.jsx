import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../action_creators';

export class App extends React.Component {

    render() {

    	let children_with_props = React.cloneElement(this.props.children, {...this.props});

        return (
        	<div>
        		{children_with_props}
        	</div>
        );
    }
}

function mapStateToProps(state) {
	return {
		activities: state.get('activities'),
	};
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);