// ProjectScreen.js
import React, { Component } from 'react';
import { 
	Container,
	Fab,
	Icon,
	Content
} from 'native-base';
// import FooterTabs from '../../Components/FooterBar';
import ProjectList from '../../Components/projects/ProjectList';


class ProjectScreen extends Component {
	static navigationOptions = {
		title: 'Projects',
		tabBarIcon: () => (
				<Icon name="document" />
			)
	}
	render() {
		const { navigation } = this.props;
		return (
			<Container>
					<Content>
						<ProjectList navigation={navigation} />
					</Content> 
					<Container>
						<Fab 
						style={{ backgroundColor: '#71DC78' }}
						onPress={() => navigation.navigate('ProjectCreate')}
						>
							<Icon name="add" />
						</Fab>
					</Container>
					
			</Container>
			);
	}
}
 // <FooterTabs navigation={navigation} />
export default ProjectScreen;