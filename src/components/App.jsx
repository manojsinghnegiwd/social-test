import React from 'react';
import {connect} from 'react-redux';
import Text from './Text';
import * as actionCreators from '../action_creators';

export class App extends React.Component {

    render() {
        return (
        	<Text {...this.props} />
        );
    }
}

function mapStateToProps(state) {
	return {
		message: state.get('message'),
		textColor: state.get('textColor')
	};
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);