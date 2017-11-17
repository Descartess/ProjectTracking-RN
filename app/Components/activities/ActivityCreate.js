// ActivityCreate
import React, { Component } from 'react';
import {
	Form,
	Item,
	Label,
	Button,
	Text,
	Input,
	View,
	Container,
} from 'native-base';
import { subscribeCached } from 'react-native-meteor-redux';
import Meteor, { createContainer } from 'react-native-meteor';
import { MeteorStore } from '../../config/reduxStore';


class ActivityCreate extends Component {
	constructor(props) {
		super(props);
			this.state = {
				selectedItem: undefined,
				selected1: '',
				activities: {
					activity: '',
					level: '',
					department: ''
				}
			};
		}
	onValueChange(value: string) {
        this.setState({
            selected1: value,
            activities: {
				...this.state.activities,
				department: value
            }
        });
    }
    onActivityChange(activity) {
		this.setState({
			activities: {
				...this.state.activities,
				activity
            }
		});
    }
    onLevelChange(level) {
    	this.setState({
    		activities: {
    			...this.state.activities,
    			level
    		}
    	});
    }
    onSubmit() {
    	const { goBack } = this.props.navigation;
    	Meteor.call('activities.insert',this.state.activities,(err,res) => {
			console.log(err,res);
		});
		goBack();
    	}
    renderDepartments() {
		return this.props.departments.map(department =>
					<Item label={department.name} value={department._id} key={department._id}	/>
							);
    }
	render() {
		return (
			<Container>
					<View>
						<Form>
							<Item floatingLabel>
								<Label> Activity </Label>
								<Input
									value={this.state.activities.activity}
									onChangeText={this.onActivityChange.bind(this)}
								/>
							</Item>
							<Item floatingLabel last >
								<Label> Level </Label>
							<Input
								value={this.state.activities.level} 
								keyboardType='numeric'
								onChangeText={this.onLevelChange.bind(this)}
							/>
							</Item>
							</Form>
							{/* <Text> Select Department </Text>
							<Picker
								mode="dialog"
								selectedValue={this.state.selected1}
								onValueChange={this.onValueChange.bind(this)}
							>
								{this.renderDepartments()}
							</Picker>
							*/}
						<Button light block onPress={this.onSubmit.bind(this)}>
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
	const sub = subscribeCached(MeteorStore,'departments');
	return {
		departments: Meteor.collection('departments').find({})
	};
},ActivityCreate);

