import React, { Component } from 'react';
import { Container } from 'native-base';
import ProjectCreate from '../../Components/projects/ProjectCreate';

class CreateProjectScreen extends Component {
	static navigationOptions = {
		title: 'Create Project'
	}
	render() {
		const { navigation } = this.props;
		return (
			<Container>
				<ProjectCreate navigation={navigation} />
			</Container>
			);
	}
}

export default CreateProjectScreen;