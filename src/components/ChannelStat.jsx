import React from 'react';
import Activities from '../components/Activities';
import Activity from '../components/Activity';
import Loading from 'react-loading';

export default class ChannelStat extends React.Component {

	componentWillReceiveProps (nextProps) {
		if(nextProps.activities != this.props.activities) {
			this.props.sortChannels();
			this.props.getPopularActivities(5);
			this.props.getMostLiked();
			this.props.getMostCommented();
			this.props.getMostShared();
		}
	}
 
	render () {

		const {channels, popularActivities, mostLiked, mostShared, mostCommented} = this.props;
		const maxShares = channels && channels.length > 0 && channels[0].shares;

		return (
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 center-block">
				<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div>
						<p className="stat-heading">Social Media Channels</p>
						{channels && channels.length > 0 && channels.map((channel, index) => {
							let width = (channel.shares == maxShares ? 100 : channel.shares / maxShares * 100);
							return (
								<div key={index}>
									<p>{channel.name.toUpperCase()}</p>
									<div className="progress">
										<div className="progress-bar" style={{width: `${width}%`}}>
											{channel.shares} Shares
										</div>
									</div>
								</div>
							)
						}) || <Loading type="spin" color="#333" />}
					</div>
					<div>
						<p className="stat-heading">Most Liked</p>
						<Activity showLoading={!mostLiked.id} data={mostLiked} actionsDisabled={true} />
					</div>
					<div>
						<p className="stat-heading">Most Shared</p>
						<Activity showLoading={!mostShared.id} data={mostShared} actionsDisabled={true} />
					</div>
					<div>
						<p className="stat-heading">Most Commented on</p>
						<Activity showLoading={!mostCommented.id} data={mostCommented} actionsDisabled={true} />
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<p className="stat-heading">Popular Activities</p>
					{popularActivities && popularActivities.length > 0 ? <Activities {...this.props} activities={popularActivities} actionsDisabled={true} /> : <Loading type="spin" color="#333" />}
				</div>
			</div>
		)
	}
} 