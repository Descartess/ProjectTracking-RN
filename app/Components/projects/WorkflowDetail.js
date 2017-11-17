// WorkflowDetail.js
import React from 'react';
import { Card, CardItem , Text, Body, Button } from 'native-base';

const WorkflowDetail = ({ Workflow, navigate }) => {
	const { activity, endDate, startDate } = Workflow;
	const SD = new Date(startDate).toDateString();
	const ED = new Date(endDate).toDateString();
	return (
		<Card>
			<CardItem header> 
				<Text>{ activity }</Text>
			</CardItem>
			<CardItem>
				<Body>
					<Button round light onPress={() => navigate('createTask',{ Workflow })}>
						<Text> Create Tasks </Text>
					</Button>
				</Body>
			</CardItem>
			<CardItem header >
				<Text note> { SD } - { ED } </Text>
			</CardItem>
		</Card>
		);
};

export default WorkflowDetail;
