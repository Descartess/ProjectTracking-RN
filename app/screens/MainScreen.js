// ProjectScreen.js
// MainScreen.js
import React, { Component } from 'react';
import { 
	Container,
	Content,
	Text,
	Card,
	CardItem,
	Icon,
	Right
} from 'native-base';
import Meteor from 'react-native-meteor';
// import FooterTabs from '../Components/FooterBar';

// import ProjectCreate from '../Components/projects/ProjectCreate';

class MainScreen extends Component {
	static navigationOptions = {
		title: 'Dashboard',
		tabBarIcon: () => (
				<Icon name="speedometer" />
			)
	}
	render() {
		console.log(Meteor.user());
		const { navigation } = this.props;
		return (
			<Container>
					<Content>
						<Card>
							<CardItem button onPress={() => navigation.navigate('viewTask')}>
								<Icon name="document" />
								<Text> Tasks </Text>
								<Right>
									<Icon name="arrow-forward" />
								</Right>
							</CardItem>
							<CardItem>
								<Icon name="clipboard" />
								<Text> Daily Reports </Text>
								<Right>
									<Icon name="arrow-forward" />
								</Right>
							</CardItem>
							<CardItem>
								<Icon name="notifications" />
								<Text> Notifications </Text>
								<Right>
									<Icon name="arrow-forward" />
								</Right>
							</CardItem>
						</Card>
					</Content>
			</Container>
			);
	}
}
 // <FooterTabs navigation={navigation} />
export default MainScreen;