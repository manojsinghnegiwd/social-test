import React from 'react';

// main activities page
export default class ActivitiesPage extends React.Component {
	
	componentWillReceiveProps (nextProps) {
		console.log(nextProps)
	}

	_getActivities = () => {
		const {getActivities, startFetchingActivities} = this.props;
		startFetchingActivities();
		getActivities();
	}

	render () {
		return <div onClick={this._getActivities}>ActivitiesPage </div>
	}
}