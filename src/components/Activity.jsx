import React from 'react';

export default class Activity extends React.Component {
	render () {
		const {data} = this.props;
		return (
			<div>
				<span>{data.actor_username}</span>
			</div>
		)
	}
}