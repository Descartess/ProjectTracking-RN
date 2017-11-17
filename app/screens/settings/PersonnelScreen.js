// PersonnelScreen

import React, { Component } from 'react';
import { 
	Container,
	Fab,
	Icon,
	Content
} from 'native-base';
import PersonnelList from '../../Components/personnel/personnelList';

class PersonnelScreen extends Component {
	static navigationOptions ={
		title: 'Personnel',
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Content>
					<PersonnelList />
				</Content>
				<Fab onPress={() => navigate('PersonnelCreate')}>
					<Icon name='add' />
				</Fab>
			</Container>
			);
	}
}
export { PersonnelScreen };
