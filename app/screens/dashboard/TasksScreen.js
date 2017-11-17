// TasksScreen.js
// ViewTasks.js
import React, { Component } from 'react';
import { Content, Container } from 'native-base';
import ViewTasks from '../../Components/tasks/ViewTasks';

class TasksScreen extends Component {
	static navigationOptions ={
		title: ' Tasks '
	}
	render() {
		return (
		<Container>
			<Content>
				<ViewTasks />
			</Content>
		</Container>
			);
	}
}

export default TasksScreen;
