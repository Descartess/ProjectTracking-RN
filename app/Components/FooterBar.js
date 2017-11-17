// FooterBar
import React, { Component } from 'react';
import {
	Footer,
	FooterTab,
	Button,
	Icon,
	Text,
} from 'native-base';
// import { connect } from 'react-redux';
// import * as actions from '../actions';


class FooterTabs extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { navigate } = this.props.navigation;

		// const { projects, dashboard, settings } = this.props;
		return (
			<Footer >
				
				<FooterTab>
					<Button 
					onPress={() => navigate('dashboard')}
					>
						<Icon name="speedometer" />
						<Text>Dashboard</Text>
					</Button>
				</FooterTab>
				<FooterTab>
					<Button 
					onPress={() => navigate('projects')}
					>
						<Icon name="list-box" />
						<Text>Projects</Text>
					</Button>
				</FooterTab>
				<FooterTab>
					<Button 
					onPress={() => navigate('settings')}
					>
						<Icon name="settings" />
						<Text>Settings</Text>
					</Button>
				</FooterTab>
			</Footer>
			);
		}
	}

// const mapStateToProps = state => {
// 	const { dashboard, settings, projects } = state.tabs;
// 	return { dashboard, settings, projects };
// };

export default FooterTabs;
