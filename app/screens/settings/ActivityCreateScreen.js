// ActivityCreateScreen.js
import React, { Component } from 'react';
import {
	Container
} from 'native-base'; 

import ActivityCreate from '../../Components/activities/ActivityCreate';

class ActivityCreateScreen extends Component {
	static navigationOptions = {
		title: 'Create Activity'
	}
	render() {
		const { navigation } = this.props;
		return (
			<Container >
				<ActivityCreate navigation={navigation} />
			</Container>
			);
	}
}
export { ActivityCreateScreen };

