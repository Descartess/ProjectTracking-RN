import React, { Component } from 'react';

import {
	Container,
} from 'native-base';

import DepartmentList from '../../Components/departments/departmentList';
import CreateDepartment from '../../Components/departments/createDepartment';

class DepartmentScreen extends Component {
	static navigationOptions = {
		title: 'Departments'
	}
	render() {
		return (
			<Container>
				<DepartmentList />
				<CreateDepartment />
			</Container>
			);
	}
}
export { DepartmentScreen };