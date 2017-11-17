import React, { Component } from 'react';
import {
	Card,
	Text,
	// ListItem,
	CardItem,
	Content,
	Container
} from 'native-base';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
import { subscribeCached } from 'react-native-meteor-redux';
import { MeteorStore } from '../../config/reduxStore';

class DepartmentList extends Component {
	renderRow(department) {
		console.log(department);
		return (
			<CardItem>
				<Text>
					{department.name}
				</Text>
			</CardItem>
			);
	}
	render() {
		const { departmentsReady } = this.props;
		return (
			<Container>
				<Content>
					<Card>
						{!departmentsReady && <Text> Not Ready </Text>}
						<MeteorListView
							collection="departments"
							options={{ sort: { createdAt: -1 } }}
							renderRow={this.renderRow}
							enableEmptySections
						/>
					</Card>
				</Content>
			</Container>
			);
	}
}

export default createContainer(params => {
	const handle = subscribeCached(MeteorStore,'departments',(err,res) => {
		console.log(err,res);
	});
	return {
		departmentsReady: handle.ready(),
	};
},DepartmentList);
