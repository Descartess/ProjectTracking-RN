// VerbList.js
import React, { Component } from 'react';
import {
	CardItem,
	Text,
	View
} from 'native-base';
import { createContainer, MeteorListView } from 'react-native-meteor';
import { subscribeCached } from 'react-native-meteor-redux';
import { MeteorStore } from '../../config/reduxStore';

class VerbList extends Component {

	renderRow(verb) {
		return (
			<CardItem>
				<Text>{verb.verb}</Text>
			</CardItem>
			);
	}

	render() {
		return (
			<View>
				<MeteorListView 
					collection='verbs'
					enableEmptySections
					renderRow={this.renderRow}
				/>
			</View>
			);
	}
}

export default createContainer(params => {
	const sub = subscribeCached(MeteorStore,'verbs');
	return {
		handle: sub.ready()
	};
},VerbList);