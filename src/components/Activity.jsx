import React from 'react';
import Icon from './Icon';
export default class Activity extends React.Component {
	render () {
		const {data} = this.props;
		return (
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div className="activity">
					<div className="activity-header">
						<a target="_blank" href={data.actor_url} className="pull-left">
							<img className="activity-avator" height={45} width={45} src={data.actor_avator} />
						</a>
						<div className="activity-meta">
							<div className="activity-user">
								<a target="_blank" href={data.actor_url}>
									<span>{data.actor_username}</span>
								</a>
								<span>{data.actor_description}</span>
							</div>
							<span>
								<Icon iconName={data.provider} />
							</span>
						</div>
					</div>
					<div className="activity-body">
						{data.activity_attachment_type == 'image/jpeg' ?
							<img className="img-responsive" src={data.activity_attachment} /> : data.activity_message && data.activity_message}
					</div>
					<div className="activity-footer">
						<ul className="list-inline">
							<li>
								like
								{data.activity_likes}
							</li>
							<li>
								Reply
								{data.activity_comments}
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}