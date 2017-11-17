// personnelCreate.js
import React, { Component } from 'react';
import {
	Input,
	Text,
	Button,
	Form,
	Label,
	Item,
	Container,
	Content,
	Picker
} from 'native-base';
import Meteor, { createContainer } from 'react-native-meteor';
import { subscribeCached } from 'react-native-meteor-redux';
import { MeteorStore } from '../../config/reduxStore';

class PersonnelCreate extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	firstName: '',
	  	lastName: '',
	  	email: '',
	  	department: ''
	  };
	}
	onSubmit() {
		const { goBack } = this.props.navigation;
		Meteor.call('personnel.insert',this.state);
		goBack();
	}
	renderDepartments() {
		return this.props.departments.map(Department =>
				<Item label={Department.name} value={Department._id} key={Department._id} />
			);
	}
	render() {
		return (
			<Container>
					<Content>
						<Form>
							<Item floatingLabel>
								<Label> First Name</Label>
								<Input
									value={this.state.firstName} 
									onChangeText={firstName => this.setState({ firstName })}
								/>
							</Item>
							<Item floatingLabel>
								<Label> Last Name</Label>
								<Input 
									value={this.state.lastName}
									onChangeText={lastName => this.setState({ lastName })}
								/>
							</Item>
							<Item floatingLabel>
								<Label> Email </Label>
								<Input
									value={this.state.email}
									onChangeText={email => this.setState({ email })}	
								/>
							</Item>
						</Form>
							<Picker
							selectedValue={this.state.department}
							onValueChange={value => this.setState({ department: value })}
							>
								{this.renderDepartments()}
							</Picker>
						<Button light block onPress={this.onSubmit.bind(this)}>
							<Text>
								Submit
							</Text>
						</Button>
					</Content>
			</Container>
			);
	}
}
export default createContainer(params => {
	const sub = subscribeCached(MeteorStore,'departments');
	return {
		departments: Meteor.collection('departments').find({})
	};
},PersonnelCreate);

