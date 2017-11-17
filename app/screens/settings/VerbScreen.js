
import React, { Component } from 'react';
import { 
	Container,
	Fab,
	Icon
	} from 'native-base';
import VerbList from '../../Components/verbs/VerbList';

class VerbScreen extends Component {
	static navigationOptions ={
		title: ' Verbs'
	}
	render() {
        const { navigate } = this.props.navigation;
		return (
			<Container>
				<VerbList />
				<Fab onPress={() => navigate('VerbCreate')}>
                    <Icon name='add' />
				</Fab>
			</Container>
			);
	}
}
export { VerbScreen };
