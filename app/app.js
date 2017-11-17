// app.js
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import Meteor from 'react-native-meteor';
import ReduxThunk from 'redux-thunk';
import { AsyncStorage ,View , StatusBar } from 'react-native';

import reducers from './reducers';
import AppScreens from './config/routes';

// Meteor server connection

// Meteor.connect('ws:192.168.43.162:3000/websocket'); // Local Server Connection Phone

Meteor.connect('ws:192.168.1.101:3000/websocket'); // Local Server Connection WIFI

// Meteor.connect('ws:seriousposerver.herokuapp.com/websocket'); // Remote Server Connection

//  store configuration
const store = createStore(reducers,{},compose(applyMiddleware(ReduxThunk),autoRehydrate()));

class App extends Component {
	constructor(props) {
		super(props);
	  	this.state = {
	  		rehydrated: false
	  	};
	}
	componentWillMount() {
		persistStore(store, { storage: AsyncStorage }, () => {
			this.setState({ rehydrated: true });
		});
	}
	render() {
		if (!this.state.rehydrated) {
			return (
				<StatusBar />
				);
		}
		return (
		<View
			style={{ flex: 1 }}
		>
			<StatusBar />
			<Provider store={store}>
				<AppScreens />
			</Provider>
		</View>
		);
	}
}
export default App;
