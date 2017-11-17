// createProjectScreen.js
import React, { Component } from 'react';
import {
	Form,
	Item,
	Input,
	Label,
	Text,
	Button,
	Container,
	Content
} from 'native-base';
import Meteor from 'react-native-meteor';

class CreateProject extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	client_name: '',
	  	client_email: '',
	  	name: '',
	  	project_id: ''
	  };
	}
	onSubmit() {
		const { goBack } = this.props.navigation;
		// console.log(this.state);
		Meteor.call('projects.insert', this.state);
		goBack();
	}
	render() {
		return (
			<Container>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label> Client Name </Label>
							<Input
								value={this.state.client_name} 
								onChangeText={value => this.setState({ client_name: value })}
							/>
						</Item>
						<Item floatingLabel>
							<Label> Client Email</Label>
							<Input 
								value={this.state.client_email}
								onChangeText={value => this.setState({ client_email: value })}
							/>
						</Item>
						<Item floatingLabel>
							<Label> Project Name </Label>
							<Input 
								value={this.state.name}
								onChangeText={value => this.setState({ name: value })}
							/>
						</Item>
						<Item floatingLabel last>
							<Label> Project ID</Label>
							<Input 
								value={this.state.project_id}
								onChangeText={value => this.setState({ project_id: value })}
							/>
						</Item>
						<Button light block onPress={this.onSubmit.bind(this)}>
							<Text> Create Project </Text>
						</Button>
					</Form>
				</Content>
			</Container>
			);
	}	
}

export default CreateProject;