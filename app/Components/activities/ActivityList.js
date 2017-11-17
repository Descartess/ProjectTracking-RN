// ActivityList.js
import React, { Component } from 'react';
import { Text,
		CardItem,
		View,
	} from 'native-base';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
import { subscribeCached } from 'react-native-meteor-redux';
import { MeteorStore } from '../../config/reduxStore';

class ActivityList extends Component {
	renderRow(activity) {
		console.log(activity);
		return ( 
			<CardItem>
					<Text>
						{activity.name}
					</Text>
			</CardItem>
		);
	}
	render() {
		const { counter } = this.props;
		console.log(counter);
		console.log(MeteorStore.getState());
		return (
			<View>
				
				<MeteorListView
				collection="activities"
				options={{ sort: { createdAt: -1 } }}
				enableEmptySections
				renderRow={this.renderRow}
				/>
			</View>
			);
	}
}

export default createContainer(params => {
	const handle = subscribeCached(MeteorStore,'activities',(err,res)=> {
		console.log(err,res);
	});
	return {
		acct: handle.ready(),
		counter: Meteor.collection('activities').find({})

	};
},ActivityList);