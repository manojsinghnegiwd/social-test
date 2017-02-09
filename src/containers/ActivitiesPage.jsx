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
		return <div className="col-lg-4 col-md-4 col-sm-8 col-xs-12 center-block">
				<Activities {...this.props} />
			</div>
	}
}