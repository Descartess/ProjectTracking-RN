import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
	tasks: taskReducer,
	auth: AuthReducer
});