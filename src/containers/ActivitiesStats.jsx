import React from 'react';
import ChannelStat from '../components/ChannelStat';

export default class ActivitiesStats extends React.Component {

	componentWillMount() {
		this.props.startFetchingActivities();
		this.props.getActivities();
	}

	render() {
		return (
			<div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 center-block">
				<ChannelStat {...this.props} />
			</div>
		)
	}
}