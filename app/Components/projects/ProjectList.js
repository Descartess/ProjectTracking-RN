// ProjectList.js

import React, { Component } from 'react';
import {
	Card,
	Text,
	CardItem
} from 'native-base';
import { MeteorListView, createContainer } from 'react-native-meteor';
import { subscribeCached } from 'react-native-meteor-redux';
import { MeteorStore } from '../../config/reduxStore';

class ProjectList extends Component {
	onPress(project) {
		console.log('Pressed');
		const { navigate } = this.props.navigation;
		navigate('ProjectDetail',{ project });
	}

	renderRow(project) {
		return (
			<CardItem button onPress={() => this.onPress(project)}>
				<Text>{project.name}</Text>
			</CardItem>
			);
	}

	render() {
		return (
			<Card>
				<MeteorListView 
					collection="projects"
					enableEmptySections
					options={{ sort: { createdAt: -1 } }}
					renderRow={this.renderRow.bind(this)}
				/>
			</Card>
			);
	}
}
export default createContainer((params) => {
	const handle = subscribeCached(MeteorStore,'projects',(err,res) => {
		console.log(err,res);
	});
	return {
		projectsReady: handle.ready
	};
},ProjectList);
