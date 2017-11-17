// taskUpdateReducers.js
import { CHANGE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE , action) => {
	switch (action.type) {
		case CHANGE:
			return { ...state, status: !action.payload.value };
		default:
			return state;
	}
};
