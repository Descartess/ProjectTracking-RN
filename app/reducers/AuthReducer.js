// tabReducer.js

import { LOGGEDIN, LOGGEDOUT } from '../actions/types';

const INITIAL_STATE = {
	loggedIn: false
};

export default (state = INITIAL_STATE, action) => {
	console.log(state);
	switch (action.type) {
		case LOGGEDIN:
			return { ...state, loggedIn: true };
		case LOGGEDOUT:
			return { ...state, loggedIn: false };
		default:
			return state;
		}
};

