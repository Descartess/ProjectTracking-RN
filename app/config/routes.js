import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import MainScreen from '../screens/MainScreen';
import ProjectScreen from '../screens/projects/ProjectScreen';
import ProjectDetailNavigator from '../screens/projects/ProjectDetailNavigator';
import CreateProjectScreen from '../screens/projects/createProjectScreen';
import CreateProjectWorkFlow from '../screens/projects/createProjectWorkflow';
import TasksScreen from '../screens/dashboard/TasksScreen';
import {
	SettingScreen,
	DepartmentScreen,
	PersonnelScreen,
	VerbScreen,
	ActivityScreen,
	ActivityCreateScreen,
	PersonnelCreateScreen,
	VerbCreateScreen
} from '../screens/settings';
import CreateTask from '../Components/tasks/CreateTasks';
import LoginForm from '../Components/LoginForm';
import SignUpForm from '../Components/SignUpForm';

const AuthStack = StackNavigator({
	Login: { screen: LoginForm },
	SignUp: { screen: SignUpForm }
});

const MainTabs = TabNavigator({
	Dashboard: { screen: MainScreen },
	Projects: { screen: ProjectScreen },
	Settings: { screen: SettingScreen }
}, {
	tabBarOptions: {
		showIcon: true,
		upperCaseLabel: false,
		showLabel: true,
		style: {
			backgroundColor: 'white',
			elevation: 2,
			borderTopWidth: 1,
			borderColor: '#ddd'

		},
		labelStyle: {
			color: 'black'
		},
		indicatorStyle: {
			backgroundColor: 'black'
		}
	},
	tabBarPosition: 'bottom'
});

const Main = StackNavigator({
	Root: { screen: MainTabs },
	createTask: { screen: CreateTask },
	viewTask: { screen: TasksScreen },
	ProjectCreate: { screen: CreateProjectScreen },
	ProjectDetail: { screen: ProjectDetailNavigator },
	createWorkflow: { screen: CreateProjectWorkFlow },
	Departments: { screen: DepartmentScreen },
	Personnel: { screen: PersonnelScreen },
	Verbs: { screen: VerbScreen },
	Activity: { screen: ActivityScreen },
	ActivityCreate: { screen: ActivityCreateScreen },
	PersonnelCreate: { screen: PersonnelCreateScreen },
	VerbCreate: { screen: VerbCreateScreen },
});

const RootNavigator = (loggedIn) => { 
	return StackNavigator({
		SignedOut: {
			screen: AuthStack,
			navigationOptions: {
				gesturesEnabled: false
			}
		},
		SignedIn: {
			screen: Main,
			navigationOptions: {
				gesturesEnabled: false
			}
		}
		},
		{
			headerMode: 'none',
			mode: 'modal',
			initialRouteName: loggedIn ? 'SignedIn' : 'SignedOut'
		});
};

class AppScreens extends Component {
	render() {
		const { loggedIn } = this.props;
		const Layout = RootNavigator(loggedIn);
		return (
			<Layout />
			);
	}
}

const mapStateToProps = ({ auth }) => {
	const { loggedIn } = auth;
	return { loggedIn };
}; 

export default connect(mapStateToProps)(AppScreens);