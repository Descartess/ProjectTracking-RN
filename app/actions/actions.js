// actions.js
import { 
	LOGGEDIN,
	LOGGEDOUT,
	 } from './types';

export const onLogin = () => {
	return {
		type: LOGGEDIN,
	};
};

export const onLogOut = () => {
	return {
		type: LOGGEDOUT,
	};
};
