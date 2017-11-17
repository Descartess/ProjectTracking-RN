// VerbCreateScreen.js
import React, { Component } from 'react';
import VerbCreate from '../../Components/verbs/verbCreate';

class VerbCreateScreen extends Component {
	static naviagtionOptions ={
		title: 'Create Verb'
	}
	render() {
		const { navigation } = this.props;
		return (
			<VerbCreate navigation={navigation} />
			);
	}
}

export { VerbCreateScreen };