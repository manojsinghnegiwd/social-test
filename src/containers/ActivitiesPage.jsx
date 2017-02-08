import React from 'react';
import Activities from '../components/Activities'; // main activities component

// main activities page
export default class ActivitiesPage extends React.Component {

	componentWillMount = () => {
		this._getActivities();
	}

	_getActivities = () => {
		const {getActivities, startFetchingActivities} = this.props;
		startFetchingActivities();
		getActivities();
	}

	render () {
		const {activities,fetchingActivities} = this.props;
		return <Activities activities={activities} fetchingActivities={fetchingActivities} />
	}
}