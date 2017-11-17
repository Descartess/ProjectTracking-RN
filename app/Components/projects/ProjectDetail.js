import React, { Component } from 'react';

import { Container, 
	Content,
	Button,
	Text,
	CardItem,
	Card,
	Body
	 } from 'native-base';
import Meteor, { createContainer } from 'react-native-meteor';
import { subscribeCached } from 'react-native-meteor-redux';
import { MeteorStore } from '../../config/reduxStore';
import WorkflowDetail from './WorkflowDetail';


class ProjectDetail extends Component {
		renderWorkflow() {
			const { project } = this.props.navigation.state.params;
			const { navigate } = this.props.navigation;
			const { workflow } = this.props;
			if (workflow.length > 0) {
				return this.props.workflow.map(Workflow => 
					<WorkflowDetail key={Workflow._id} Workflow={Workflow} navigate={navigate} />
					);
			}
			return (
				<CardItem >
				<Body>
					<Text note>
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
							{this.renderWorkflow()}
					</Card>
				</Content>
			</Container>
				);
			}
}

export default createContainer(props => {
	const sub = subscribeCached(MeteorStore,'workflow');
	return {
		workflow: Meteor.collection('workflow').find({})
	};
},ProjectDetail);
