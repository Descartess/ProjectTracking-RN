import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import { subscribeCached } from 'react-native-meteor-redux';
import {
	Form,
	Item,
	Label,
	Button,
	Text,
	Input,
	View,
	Container,
	Picker
} from 'native-base';
import { MeteorStore } from '../../config/reduxStore';

class VerbCreate extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	selected1: '',
	  	verb: '',
	  	department: ''
	  };
	}
	onValueChange(value:string) {
		this.setState({
			selected1: value
		});
	}
	onDepartmentChange(value: string) {
		this.setState({
			department: value
		});
	}
	onSubmit() {
		const { goBack } = this.props.navigation;
		Meteor.call('verbs.insert',this.state);
		goBack();
	}
	renderActivities() {
		return this.props.activities.map(Activity =>
			<Item label={Activity.name} value={Activity._id} key={Activity._id} />
		);
	}
	renderDepartments() {
		return this.props.departments.map(Department =>
			<Item label={Department.name} value={Department._id} key={Department._id} />
			);
	}

	render() {
		const { PickerStyle, headerStyle, headerTextStyle ,buttonStyle } = styles;
		return (
			<Container>
					<View style={PickerStyle}>
						<View style={headerStyle}>
							<Text style={headerTextStyle}>  Create Verb</Text>
						</View>
						<Form>
							<Item floatingLabel>
								<Label> Verb </Label>
								<Input
								onChangeText={verb => this.setState({ verb })}
								/>
							</Item>
						</Form>
					</View>
					<View style={PickerStyle} >
						<View style={headerStyle}>
							<Text style={headerTextStyle}>  Select Activity</Text>
						</View>

						<Picker
							mode="dropdown"
							selectedValue={this.state.selected1}
							onValueChange={this.onValueChange.bind(this)}
						>
							{this.renderActivities()}
						</Picker>
					</View>
					<View style={PickerStyle} >
						<View style={headerStyle}>
							<Text style={headerTextStyle}>  Select Department</Text>
						</View>
						<Picker
							mode="dropdown"
							selectedValue={this.state.department}
							onValueChange={this.onDepartmentChange.bind(this)}
						>
							{this.renderDepartments()}
						</Picker>
					</View>
					<View style={buttonStyle}>
						<Button block success rounded onPress={this.onSubmit.bind(this)}>
							<Text>
								Submit
							</Text>
						</Button>
					</View>
			</Container>
			);
	}
}
export default createContainer(params => {
	const sub1 = subscribeCached(MeteorStore,'activities');
	const sub2 = subscribeCached(MeteorStore,'departments');
	return {
		activities: Meteor.collection('activities').find({}),
		departments: Meteor.collection('departments').find({})
	};
},VerbCreate);

const styles = {
	PickerStyle: {
		backgroundColor: '#fff',
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 2
	},
	calendarStyle: {
		backgroundColor: '#fff',
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 2
	},
	headerStyle: {
		backgroundColor: '#f5f5f5',
		borderBottomWidth: 1,
		borderColor: '#ddd'

	},
	headerTextStyle: {
		paddingTop: 5,
		paddingBottom: 5,
	},
	buttonStyle: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 5,
		paddingRight: 5
	}
};
