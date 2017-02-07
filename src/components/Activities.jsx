import React from 'react';
import Activity from './Activity';

export default class Activities extends React.Component {
	render () {
		const {activities} = this.props;
		return (
			<div>
				{activities.map((activity, index) => <Activity key={index} data={activity} />)}
			</div>
		)
	}
}