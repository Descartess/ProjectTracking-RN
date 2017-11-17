// LoginForm.js
import React, { Component } from 'react';
import { 
	Container,
	Content,
	Input,
	Button, 
	Form,
	Item,
	Label,
	Text,
	View,
	Spinner
} from 'native-base';
import { connect } from 'react-redux';
import Meteor from 'react-native-meteor';
import { onLogin } from '../actions';

class LoginForm extends Component {
	static navigationOptions = {
		title: 'Login'
	}
	constructor(props) {
	    super(props);
	
	    this.state = {
	    	email: '',
	    	password: '',
	    	loading: false,
	    	error: ''
	    };
	}
	onLogIn() {
		const { navigate } = this.props.navigation;
		this.setState({ loading: true });
		const { email, password } = this.state;
		 Meteor.loginWithPassword(email, password, (err) => {
		 	if (err) {
		 		this.setState({ error: err.message, loading: false });
		 	} else {
		 		this.props.onLogin();
		 		this.setState({ error: '', loading: false, email: '', password: '' });
		 		navigate('dashboard');
		 	}
		 });
	}
	renderButton() {
		const { navigate } = this.props.navigation;
		if (this.state.loading) {
			return (
				<Spinner />
				);
		} else {
			return (
				<View>
					<Button full onPress={this.onLogIn.bind(this)}>
							<Text>Sign In</Text>
					</Button>
					<View style={{ alignSelf: 'flex-end' }}>
						<Button transparent onPress={() => navigate('SignUp')} >
							<Text> Sign Up</Text> 
						</Button>
					</View>
				</View>
				);
		}
	}
	render() {
		return (
			<Container>
				<Content> 
					<Form>
						<Item floatingLabel>
							<Label> 
								Email 
							</Label>
							<Input 
								onChangeText={email => this.setState({ email })}
							/>
						</Item>
						<Item floatingLabel last>
							<Label> Password </Label>
							<Input 
								secureTextEntry
								onChangeText={password => this.setState({ password })} 
							/>
						</Item>
					</Form>
						{this.renderButton()}
					<View style={{ alignSelf: 'center' }}>
						<Text style={{ color: 'red' }}>
							{ this.state.error }
						</Text>
					</View>
				</Content>
			</Container>
			);		
	}
} 

export default connect(null,{ onLogin })(LoginForm);
