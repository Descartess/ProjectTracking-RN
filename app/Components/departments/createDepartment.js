import React, { Component } from 'react';
import {
	Icon,
	Fab,
	Text,
	Container,
	CardItem,
	Form,
	Input,
	Button,
	Item,
	Label,
	View
} from 'native-base';
import Meteor from 'react-native-meteor';
// import Modal from 'react-native-modalbox';
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const modalHeight = 0.4 * height;
class CreateDepartment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			swipeToClose: true,
			department: ''
		};
	}
	openModal() {
		this.refs.modal1.open();
	}
	closeModal() {
		this.refs.modal1.close();
		Meteor.call('departments.insert',this.state.department);
	}
	render() {
		return (
			<Container>
				{/*<Modal
					style={styles.modal}
					ref={'modal1'}
					position={'bottom'}
				>
					<View>
						<CardItem header>
							<Text>Add Department </Text>
						</CardItem>
						<Form>
							<Item floatingLabel>
								<Label>Department</Label>
								<Input
									value={this.state.department}
									onChangeText={department => this.setState({ department })}
								/>
							</Item>
						</Form>
							<Button block onPress={this.closeModal.bind(this)}>
								<Text>
									Submit
								</Text>
							</Button>
					</View>
				</Modal>
				*/}
				<Fab onPress={this.openModal.bind(this)}>
					<Icon name="add" />
				</Fab>
			</Container>
			);
	}
}
const styles = StyleSheet.create({
	modal: {
		height: modalHeight
	}
});

export default CreateDepartment;
