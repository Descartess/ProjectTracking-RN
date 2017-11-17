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
	Spinner
} from 'native-base';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Meteor } from 'react-native-meteor';
import { onLogin } from '../actions';

class SignUpForm extends Component {
	static navigationOptions = {
		title: 'Sign Up'
	}
	constructor(props) {
	    super(props);
	    this.state = {
	    	email: '',
	    	password: '',
	    	password1: '',
	    	accesstoken: '',
	    	loading: false,
	    	error: ''
	    };
	}
	onSignIn() {
		const { navigate } = this.props.navigation;
		const { email , password } = this.state;
		this.setState({ loading: true });

		Meteor.call('users.SignUp',{ email, password }, (err) => {
			if (err) {
				this.setState({ error: err.message, loading: false });
			} else {
				this.props.onLogin();
				navigate('dashboard');
			}
		});
		// Accounts.createUser({ email, password },(err) => {
		// 	if (err) {
		// 		this.setState({ error: err.message, loading: false });
		// 	} else {
		// 		this.props.onLogin();
		// 		navigate('dashboard');
		// 	}
		// });
	}
	validityCheck() {
		console.log('Checking Validity of Date');
	}
	renderButton() {
		if (this.state.loading) {
			return (
					<Spinner />
				);
		}
		return ( 
			<Button full onPress={this.onSignIn.bind(this)} >
				<Text>Sign Up</Text>
			</Button>
			);
		}
	render() {
		return (
			<Container>
				<Content> 
					<Form>
						<Item floatingLabel>
							<Label> Email </Label>
							<Input 
							onChangeText={email => this.setState({ email })}
							onEndEditing={this.validityCheck.bind(this)}
							/>
						</Item>
						<Item floatingLabel>
							<Label> Password </Label>
							<Input 
							secureTextEntry
							onChangeText={password => this.setState({ password })} 
							onEndEditing={this.validityCheck.bind(this)}
							/>
						</Item>
						<Item floatingLabel>
							<Label> Repeat Password </Label>
							<Input 
							secureTextEntry
							onChangeText={password1 => this.setState({ password1 })}
							onEndEditing={this.validityCheck.bind(this)}
							/>
						</Item>
						<Item floatingLabel last>
							<Label> Access Token</Label>
							<Input 
							onChangeText={accesstoken => this.setState({ accesstoken })}
							onEndEditing={this.validityCheck.bind(this)}
							/>
						</Item>
					</Form>
					<View>
						{ this.renderButton() }
					</View>
					<View style={{ alignSelf: 'center' }}>
						<Text style={{ color: 'red' }}> 
							{this.state.error}
						</Text>
					</View>
				</Content>
			</Container>
			);		
	}
} 

export default connect(null, { onLogin })(SignUpForm);
