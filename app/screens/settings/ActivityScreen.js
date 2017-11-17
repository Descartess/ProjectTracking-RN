// ActivityScreen.js

import React, { Component } from 'react';
import { 
	Container,
	Fab,
	Icon 
} from 'native-base';
import ActivityList from '../../Components/activities/ActivityList';

class ActivityScreen extends Component {
	static navigationOptions = {
		title: 'Activities'
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container >
				<ActivityList />
				<Fab onPress={() => navigate('ActivityCreate')}>
					<Icon name="add" />
				</Fab>
			</Container>
			);
	}
}
export { ActivityScreen };

