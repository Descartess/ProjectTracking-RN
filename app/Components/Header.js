// Header.js

import React, { Component } from 'react';
import { 
	Header, 
	Title, 
	Left,
	Right,
	Body,
	Button,
	Icon
	} from 'native-base';

class HeaderBar extends Component {
	render() {
		return (
			
				<Header>
					<Left>
						<Button transparent>
							<Icon name='arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title>
							Serious Me
						</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name='menu' />
						</Button>
					</Right>
				</Header>
			
			);
	}
}

export { HeaderBar };

