import React from 'react';

// main activities page
export default class ActivitiesPage extends React.Component {
	componentWillReceiveProps (nextProps) {
		console.log(nextProps)
	}
	render () {
		return <div onClick={this.props.getActivities}>ActivitiesPage</div>
	}
}