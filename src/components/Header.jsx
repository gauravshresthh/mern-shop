import React from 'react';
import {
	Navbar,
	Nav,
	Container,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const imageUrl =
	'https://i.pinimg.com/originals/7c/02/d8/7c02d8361f7acd759f197fcb243b0800.jpg';

const Header = () => {
	return (
		<header>
			<Navbar
				bg='primary'
				variant='dark'
				collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<img
								src={imageUrl}
								alt='No logo found'
								style={{
									height: 30,
									width: 30,
								}}></img>
							{'   '}
							Nishan Shop
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							{/* <LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart'></i>{' '}
									Cart
								</Nav.Link>
							</LinkContainer> */}

							<LinkContainer to='/'>
								<Nav.Link>
									<i className='fas fa-home'></i>{' '}
									Home
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/about'>
								<Nav.Link>
									<i className='fas fa-book'></i>{' '}
									About
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/register'>
								<Nav.Link>
									<i className='fa fa-user-plus'></i>{' '}
									Register
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/signin'>
								<Nav.Link>
									<i className='fa fa-user-circle-o'></i>{' '}
									Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
