import React from 'react';
import Activity from './Activity';
import Loading from 'react-loading';

export default class Activities extends React.Component {
	render () {
		const {activities, fetchingActivities} = this.props;
		return (
			<div className="col-lg-4 col-md-4 col-sm-8 col-xs-12 center-block">
				<div className="center-block">
					{fetchingActivities ? <Loading type="spin" color="#333" /> : null}
				</div>
				{ !fetchingActivities && activities && activities.length == 0 ?
					<div>
						<h1> Nothing here maybe a <span onClick={() => window.loacation.reload()}>reload</span> work</h1>
					</div>
				: activities.map((activity, index) => <Activity key={index} data={activity} />) }
			</div>
		)
	}
}