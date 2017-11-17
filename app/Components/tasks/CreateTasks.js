// CreateTasks.js 
import React, { Component } from 'react';
import { 
	Container,
	Picker,
	Button,
	Text,
	Content,
	View
 } from 'native-base';
import { Calendar } from 'react-native-calendars';
import Meteor, { createContainer } from 'react-native-meteor';

const { Item } = Picker.Item;

class CreateTask extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: `${navigation.state.params.Workflow.activity}`
	})
	constructor(props) {
	    super(props);
	    this.state = {
	    	selectedDate: '',
	    	selectedPersonnel: '0',
	    	selectedTask: '0'
	    };
	    this.onDayPress = this.onDayPress.bind(this);
	}
	componentWillMount() {
		const { Workflow } = this.props.navigation.state.params;
		this.setState({
			Workflow
		});
	}
	componentDidMount() {
		const { Verbs, Personnel } = this.props;
		this.setState({
			task: Verbs[0].verb,
			person: Personnel[0]
		});
	}
	onDayPress(day) {
		this.setState({ selectedDate: day.dateString });
	}
	onAssignTask() {
		console.log(this.state);
		const { goBack } = this.props.navigation;
		Meteor.call('tasks.insert',this.state);
		goBack();
	}
	onVerbChange(index) {
		const { Verbs } = this.props;
		this.setState({
			task: Verbs[index].verb
		});
	}
	onPersonnelChange(index) {
		const { Personnel } = this.props;
		this.setState({
			person: Personnel[index]
		});
	}
	renderPersonnel() {
		return this.props.Personnel.map((person,index) => 
			<Item label={person.firstName + ' ' + person.lastName} value={index} key={index} />
		);
	}
	renderTasks() {
		return this.props.Verbs.map((verb,index) => 
			<Item label={verb.verb} value={index} key={index} />
			);
	}

	render() {
		const { 
			PickerStyle,
			calendarStyle,
			headerStyle,
			headerTextStyle,
			buttonStyle
			 } = styles;
		console.log(this.props);
		return (
			<Container>
				<Content>
					<View style={PickerStyle}>
						<View style={headerStyle} >
							<Text style={headerTextStyle}>  Select Personnel </Text>
						</View>
							<Picker
								mode="dropdown"
								selectedValue={this.state.selectedPersonnel}
								onValueChange={this.onPersonnelChange.bind(this)}
							>
								{ this.renderPersonnel()}
							</Picker>
					</View>
					<View style={PickerStyle}>
						<View style={headerStyle} >
							<Text style={headerTextStyle}>  Select Task </Text>
						</View>
							<Picker
								mode="dropdown"
								selectedValue={this.state.selectedTask}
								onValueChange={this.onVerbChange.bind(this)}
							>
								{this.renderTasks()}
							</Picker>
					</View>
					<View style={calendarStyle}>
						<View style={headerStyle}>
							<Text style={headerTextStyle}>  Specify due date</Text>
						</View>
						<Calendar 
							onDayPress={this.onDayPress}
							markedDates={{ [this.state.selectedDate]: { selected: true } }}
						/>
					</View>
					<View style={buttonStyle}>
						<Button success block rounded onPress={this.onAssignTask.bind(this)}>
								<Text> Assign Task </Text>
						</Button>
					</View>
				</Content>
			</Container>
			);
	}
}

export default createContainer(params => {
	Meteor.subscribe('personnel');
	Meteor.subscribe('verbs');
	return {
		Personnel: Meteor.collection('personnel').find({}),
		Verbs: Meteor.collection('verbs').find({}),
	};
},CreateTask);

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

