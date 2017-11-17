// ViewTasks.js
import React, { Component } from 'react';
import { CardItem, 
	Text,
	Card,
	Body,
	View
	 } from 'native-base';
import Meteor,{ createContainer, MeteorListView } from 'react-native-meteor';

class ViewTask extends Component {
	renderRow(task) {
		return (
		<Card>
			<CardItem header>
				<Text>{task.name}</Text>
			</CardItem>
			<CardItem>
				<Body>
					<Text note>
						The above mentioned task is pending on 
						and is due on { task.endDate}
					</Text>
				</Body>
			</CardItem>
		
			<View style={styles.footerStyle}>
				<Text note>
					Daily Report
				</Text>
				<Text note>
					Task Complete
				</Text>
				</View>
			</Card>
			);
	}
	render() {
		const { tasks } = this.props;
		console.log(tasks);
		return (
			<View>
					<MeteorListView 
						collection='tasks'
						renderRow={this.renderRow}
						enableEmptySections
					/>
			</View>
			);
	}
}

export default createContainer(params => {
	Meteor.subscribe('tasks');
	return {
		tasks: Meteor.collection('tasks').find({})
	};
},ViewTask);


const styles = {
	footerStyle: { 
		flexDirection: 'row', 
		justifyContent: 'space-around',
		alignItems: 'stretch',
		paddingBottom: 15
		}
};