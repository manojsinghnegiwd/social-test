import {Map} from 'immutable';
import * as actionTypes from './actionTypes';

function setState(state, newState) {
	return {...state, ...newState};
}

function updateActivities(state, activities) {
	return {...state, activities}
}

function findIndex(list, id) {
	let ActivityIndex = -1
	for(let i = 0; i < list.length && ActivityIndex == -1; i++) {
		if(list[i].id === id) {
			ActivityIndex = i;
		}
	}
	return ActivityIndex;
}

function updateLike(state, id, likeState){
	let ActivityIndex = findIndex(state.activities, id);
	let activity = state.activities[ActivityIndex];
	activity['liked'] = likeState;

	if(likeState) {
		activity.activity_likes += 1;
	} else {
		activity.activity_likes -= 1;
	}

	return {...state, activities: [
		...state.activities,
		...[activity]
	]};
}

function getActivity(state, id) {
	let ActivityIndex = findIndex(state.activities, id);
	return state.activities[ActivityIndex];
}

function addReply(state, id, reply) {
	let activity = getActivity(state, id);
	activity.replies = activity.replies && activity.replies.concat(reply) || [reply];
	return {...state, activities:[
		...state.activities,
		...[activity]
	]}
}

function sortChannels(state) {
	let channels = {};
	let channels_list = [];
	let {activities} = state;

	activities.forEach((activity) => {
		let channel = activity.provider;
		channels[channel] = channels[channel] || [];
		channels[channel].push([]);
	})

	for(let prop in channels) {
		channels_list.push({
			name: prop,
			shares: channels[prop].length
		});
	}

	channels_list.sort((a, b) => {
		if(a.shares < b.shares) {
			return 1;
		}

		if(a.shares < b.shares) {
			return -1;
		}

		return 0
	})

	return {...state, channels: channels_list}

}

function popularActivities(state, limit) {
	let {activities} = state;
	activities.sort((a,b) => {
		let aSum = a.activity_likes + a.activity_shares + a.activity_comments;
		let bSum = b.activity_likes + b.activity_shares + b.activity_comments;

		if(aSum < bSum) {
			return 1;
		}

		if(aSum > bSum) {
			return -1;
		}

		return 0

	})

	return {...state, popularActivities: activities.slice(0, limit)};
}

function getMostPopular(state, base) {
	let {activities} = state;
	activities.sort((a,b) => {

		if(a[base] < b[base]) {
			return 1;
		}

		if(a[base] > b[base]) {
			return -1;
		}

		return 0

	})

	return activities[0];
}

export default function (state = Map(), action) {
	switch(action.type) {
		case actionTypes.SET_STATE:
			return setState(state, action.state);
		case actionTypes.UPDATE_ACTIVITIES:
			return updateActivities(state, action.activities);
		case actionTypes.START_FETCHING_LOADING:
			return {...state, fetchingActivities: true};
		case actionTypes.STOP_FETCHING_LOADING:
			return {...state, fetchingActivities: false};
		case actionTypes.LIKE_ACTIVITY:
			return updateLike(state, action.id, true);
		case actionTypes.UNLIKE_ACTIVITY:
			return updateLike(state, action.id, false);
		case actionTypes.ADD_REPLY:
			return addReply(state, action.id, action.reply)
		case actionTypes.SORT_CHANNELS:
			return sortChannels(state);
		case actionTypes.GET_POPULAR_ACTIVITIES:
			return popularActivities(state, action.limit);
		case actionTypes.GET_MOST_LIKED:
			return {...state, mostLiked: getMostPopular(state, 'activity_likes')}
		case actionTypes.GET_MOST_SHARED:
			return {...state, mostShared: getMostPopular(state, 'activity_shares')}
		case actionTypes.GET_MOST_COMMENTED:
			return {...state, mostCommented: getMostPopular(state, 'activity_comments')}
		default:
			return state;
	}
}