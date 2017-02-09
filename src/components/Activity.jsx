import React from 'react';
import Icon from './Icon';
import OnEvent from 'react-onevent'; // this component is created by me
import Loading from 'react-loading';
import moment from 'moment';

export default class Activity extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			show_replies: false,
			user_reply: '',
			reply_error: ''
		}
	}

	toggleReply = () => {
		this.setState((prevState) => ({
			show_replies: !prevState.show_replies
		}))
	}

	updateUserReply = (e) => {
		this.setState({
			user_reply: e.target.value
		})
	}

	updateError = (msg) => {
		this.setState({
			reply_error: msg
		})
	}

	submitReply = (reply, id) => {

		this.setState({
			user_reply: ''
		})

		if(reply.trim() == '') {
			this.updateError('Please write a reply');
			return;
		}
		
		this.setState({
			show_replies: false
		})

		this.updateError('');

		this.props.submitReply(reply, id);
	}

	render () {
		const {data, like, unlike, actionsDisabled, showLoading} = this.props;
		const {show_replies, user_reply, reply_error} = this.state;
		return (
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding">
				{ !showLoading ? <div className="activity full-width pull-left">
					<div className="activity-header">
						<a target="_blank" href={data.actor_url} className="pull-left">
							<img className="activity-avator" height={45} width={45} src={data.actor_avator || '/img/default.png'} />
						</a>
						<div className="activity-meta pull-left">
							<div className="activity-user">
								<a target="_blank" href={data.actor_url}>
									<span>@{data.actor_username}</span>
								</a>
								<br />
								<span>{data.actor_description}</span>
								<br />
								<a target="_blank" href={data.activity_url}>
									{moment(data.activity_date).format('DD MMM')}
								</a>
							</div>
						</div>
						<span className="pull-right">
							<a target="_blank" href={data.actor_url}>	
								<Icon iconName={data.provider} />
							</a>
						</span>
					</div>
					<div className="activity-body">
						{data.activity_attachment_type == 'image/jpeg' ?
							<img className="img-responsive" src={data.activity_attachment} /> : data.activity_message && data.activity_message}
					</div>
					<div className="activity-footer full-width">
						<ul className="list-inline pull-left">
							<li className={data.liked ? 'active' : ''} onClick={() => !actionsDisabled && (data.liked ? unlike(data.id) : like(data.id))}>
								<Icon iconName={data.liked ? 'heart' : 'heart-o'} />
								{data.activity_likes}
							</li>
							<li onClick={!actionsDisabled && this.toggleReply}>
								<Icon iconName="reply" />
								{data.activity_comments + (data.replies && data.replies.length || 0)}
							</li>
						</ul>
						<ul className="list-inline pull-right">
							<li>
								<Icon iconName="retweet" />
								{data.activity_shares}
							</li>
						</ul>
						<div className="replies pull-left full-width">
							{data.replies && data.replies.map((reply, index) => <p key={index}>{reply}</p>)}
						</div>
						{ show_replies ?
							<div className="form-group">
								<OnEvent enter={(value) => this.submitReply(value, data.id)}>
									<textarea value={user_reply} onChange={this.updateUserReply} className="form-control full-width"></textarea>
								</OnEvent>
								<Message error={reply_error} msg="Press Enter to reply" />
							</div>
						: null }
					</div>
				</div> : 
				<div className="center-block">
					<Loading type="spin" color="#333" />
				</div>}
			</div>
		)
	}
}

const Message = ({error, msg}) => <p className={error ? 'text-danger': ''}> {error || msg} </p>