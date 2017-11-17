// import React, { Component } from 'react';
// import { ListItem, CheckBox, Body, Text } from 'native-base';
// import { connect } from 'react-redux';
// import { taskStatusChange } from '../actions';

// class TaskItem extends Component {
// 	render() {
// 		const { id, task, status } = this.props.task;
// 		return (
// 			<ListItem onPress={() => this.props.taskStatusChange(id,status)} >
// 				<CheckBox checked={status} />
// 				<Body>
// 					<Text>{ task }</Text>
// 				</Body>
// 			</ListItem>
// 			);
// 	}
// }

// export default connect(null,{ taskStatusChange })(TaskItem);
