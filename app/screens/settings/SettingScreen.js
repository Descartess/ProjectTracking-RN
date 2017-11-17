// SettingScreen.js

import React, { Component } from 'react';
import { 
	Container,
	Content,
	Text,
	Card,
	CardItem,
	Right,
	Icon,
	} from 'native-base';
import { connect } from 'react-redux';
import Meteor from 'react-native-meteor';
import { onLogOut } from '../../actions';
// import FooterTabs from '../../Components/FooterBar';
// import ProjectCreate from '../Components/projects/ProjectCreate';


class SettingScreen extends Component {
	static navigationOptions = {
		title: 'Settings',
		tabBarIcon: () => (
				<Icon name="settings" />
			)
	}
	onSignOut() {
		const { navigate } = this.props.navigation;
		Meteor.logout(err => {
			if (err) {
				console.log('err');
			} else {
				navigate('SignedOut');
			}
		});
	}
	render() {
		// console.log(this.props);
		const { navigation } = this.props;

		return (
			<Container>
					<Content>
						<Card>
							<CardItem button onPress={() => navigation.navigate('Personnel')}>
								<Icon name="person" />
								<Text> Personnel </Text>
								<Right>
									<Icon name="arrow-forward" />
								</Right>
							</CardItem>
							<CardItem button onPress={() => navigation.navigate('Activity')}>
								<Icon name="clipboard" />
								<Text> Activities </Text>
								<Right>
									<Icon name="arrow-forward" />
								</Right>
							</CardItem>
							<CardItem button onPress={() => navigation.navigate('Verbs')}>
								<Icon name="list" />
								<Text> Verbs </Text>
								<Right>
									<Icon name="arrow-forward" />
								</Right>
							</CardItem>
							<CardItem button onPress={() => navigation.navigate('Departments')}>
								<Icon name="briefcase" />
								<Text> Departments </Text>
								<Right>
									<Icon name="arrow-forward" />
								</Right>
							</CardItem>
							<CardItem button onPress={this.onSignOut.bind(this)}>
								<Icon name="exit" />
								<Text> Sign out </Text>
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
export { SettingScreen };