import React, { Component } from 'react';
import {
	Card,
	CardItem,
	Text,
	Container,
	Content,
	Button,
	Body
} from 'native-base';
import Meteor, { createContainer } from 'react-native-meteor';
import { subscribeCached } from 'react-native-meteor-redux';
import { MeteorStore } from '../../config/reduxStore';


class ProjectOverview extends Component {
	renderProject() {
		const { navigate } = this.props.navigation;
		const { project } = this.props.navigation.state.params;
		const { workflow } = this.props;
		// console.log(workflow);
		if (workflow.length < 1) {
			return (
			<CardItem >
			<Body style={styles.buttonStyle}>
				<Text note style={styles.textStyle}>
					This project has no workflow created
				</Text>
				<Button light full onPress={() => navigate('createWorkflow',{ project })}>
					<Text>
						CREATE PROJECT WORKFLOW
					</Text>
				</Button>
			</Body>
			</CardItem>
				);
		}
	}
	render() {
		const { project } = this.props.navigation.state.params;
		return (
			<Container>
				<Content>
					<Card >
						<CardItem header>
							<Text>
								{ project.name }
							</Text>
						</CardItem>
							{this.renderProject()}
					</Card>
				</Content>
			</Container> 
		
			);
	}
}

export default createContainer(props => {
	// const { project } = props.navigation.state.params;
	// console.log(project);
	const sub = subscribeCached(MeteorStore,'workflow');
	return {
		workflow: Meteor.collection('workflow').find({}),
	};
},ProjectOverview);

const styles = {
	buttonStyle: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	textStyle: {
		paddingBottom: 20
	},
	button2Style: {
		paddingBottom: 30
	}
};
			