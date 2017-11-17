// PersonnelCreateScreen.js
import React, { Component } from 'react';
import PersonnelCreate from '../../Components/personnel/personnelCreate';


class PersonnelCreateScreen extends Component {

	static navigationOptions ={
		title: ' Add Personnnel'
	}
	render() {
		const { navigation } = this.props;
		return (
			<PersonnelCreate navigation={navigation} />
			);
	}
}
export { PersonnelCreateScreen };