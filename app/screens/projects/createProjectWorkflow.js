import React, { Component } from 'react';
import { View, Picker, ScrollView } from 'react-native';
import {
	Container,
	Button,
	Text,
	Card,
	CardItem
} from 'native-base';
import { Calendar } from 'react-native-calendars';
import Meteor, { createContainer } from 'react-native-meteor';
import { subscribeCached } from 'react-native-meteor-redux';
import { MeteorStore } from '../../config/reduxStore';


class CreateProjectWorkFlow extends Component {
	// issue with wrapping it in a container thats causing title not to appear
	static navigationOptions = {
		title: 'Create Project Workflow'
	}
	constructor(props) {
		super(props);
		this.state = {
			activityIndex: 0,
			activityId: '',
			activity: '',
			startDate: null,
			endDate: null,
			project: null,
		};
		this.onDayPress = this.onDayPress.bind(this);
	}
	componentDidMount() {
		const { _id, name } = this.props.navigation.state.params.project;
		const { activities } = this.props;
		this.setState({ 
			project: { _id, name },
			activityId: activities[0]._id,
			activity: activities[0].name 
		});
	}
	onPickerValueChange(index) {
		const { activities } = this.props;
		this.setState({
			activityIndex: index,
			activityId: activities[index]._id,
			activity: activities[index].name,
		});
	}
	onDayPress(day) {
		if (!this.state.startDate) {
			this.setState({
				startDate: day.dateString
			});
		} else if (!this.state.endDate) {
			this.setState({
				endDate: day.dateString
			});
		} else {
			this.setState({
				startDate: day.dateString,
				endDate: null
			});
		}
		console.log(this.state);
	}
	save() {
		// console.log('pressed');
		Meteor.call('workflow.insert',this.state, (err) => {
			if (err) {
				console.log(err);
				this.setState({ startDate: null, endDate: null });
			} else {
				this.setState({ startDate: null, endDate: null });
			}
			console.log(err);
		});
	}
	done() {
		const { goBack } = this.props.navigation;
		goBack();
	}
	renderActivities() {
		return this.props.activities.map((Activity,index) =>
			 <Picker.Item label={Activity.name} value={index} key={index} />
		 );
	}
	render() {
		return (
			<Container>
				<ScrollView>
							<Picker
							selectedValue={this.state.activityIndex}
							onValueChange={(actv,index) => this.onPickerValueChange(index)}
							>
	  							{this.renderActivities()}
							</Picker>
						<Card>
						<CardItem header>
							<Text>
								Select Duration
							</Text>
						</CardItem>
						<CardItem>
							<Calendar 
								onDayPress={this.onDayPress}
								markedDates={{ 
									[this.state.startDate]: [{ color: '#00adf5' }],//
									[this.state.endDate]: [{ color: '#00adf5' }]
									 }}
								markingType={'interactive'}
							/>
						</CardItem>
					</Card>
						<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'stretch',
							paddingTop: 10,
							paddingBottom: 10 }}
						>
							<Button light rounded onPress={this.save.bind(this)}>
								<Text>
									Save
								</Text>
							</Button>
							<Button success rounded onPress={this.done.bind(this)}>
								<Text>
									Back
								</Text>
							</Button>
						</View>
					</ScrollView>
			</Container>
			);
	}
}
export default createContainer(params => {
	const sub = subscribeCached(MeteorStore,'activities');
	return {
		activities: Meteor.collection('activities').find({})
	};
},CreateProjectWorkFlow);
