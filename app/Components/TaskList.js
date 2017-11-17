// TaskList

// import React, { Component } from 'react';
// import {
// 	ListView,
// } from 'react-native';
// import { connect } from 'react-redux';

// import TaskItem from './TaskItem';

// class TaskList extends Component {
// 	constructor(props) {
// 		super(props);
// 		const ds = new ListView.DataSource({ 
// 			rowHasChanged: (r1,r2) => r1 !== r2, 
			
// 		});
// 		this.state = {
// 			dataSource: ds.cloneWithRows(this.props.tasks)
// 		};
// 	}
// 	renderRow(task) {
// 		return (
// 			<TaskItem task={task} />
// 			);
// 	}
// 	render() {
// 		return (
// 				<ListView
// 					enableEmptySections
// 					dataSource={this.state.dataSource}
// 					renderRow={this.renderRow}
// 				/>
// 			);
// 	}
// }
// const mapStateToProps = (state) => {
// 	return { tasks: state.tasks };
// };
// export default connect(mapStateToProps)(TaskList);