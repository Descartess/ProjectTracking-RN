// personnelList.js
import React, { Component } from 'react';
import { Card,
		CardItem,
		Text 
} from 'native-base';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
import { subscribeCached } from 'react-native-meteor-redux';
import { MeteorStore } from '../../config/reduxStore';

class PersonnelList extends Component {
	renderRow(person) {
		console.log(person);
		return (
			<CardItem>
				<Text> { person.firstName } </Text>
				<Text> { person.lastName } </Text>
			</CardItem>
			);
	}
	render() {
		console.log(this.props.workflow);
		return (
			<Card>
				<MeteorListView 
					collection="personnel"
					enableEmptySections
					renderRow={this.renderRow}
				/>
			</Card>
			);
	}
}

export default createContainer(params => {
	const sub = subscribeCached(MeteorStore,'personnel');
	return {
		personnel: Meteor.collection('personnel').find({}),
		workflow: Meteor.collection('workflow').find({}),
	};
},PersonnelList);