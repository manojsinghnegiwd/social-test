import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../action_creators';
import {Link} from 'react-router';

export class App extends React.Component {

    render() {

    	let children_with_props = React.cloneElement(this.props.children, {...this.props});

        return (
        	<div>
        		<div className="text-center header-links">
        			<Link to="/">Activities</Link>
        			<Link to="/stats">Analytics</Link>
        		</div>
        		{children_with_props}
        	</div>
        );
    }
}

function mapStateToProps(state) {
	return {
		activities: state.activities,
		fetchingActivities: state.fetchingActivities,
		channels: state.channels,
		popularActivities: state.popularActivities,
		mostLiked: state.mostLiked,
		mostShared: state.mostShared,
		mostCommented: state.mostCommented
	};
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);