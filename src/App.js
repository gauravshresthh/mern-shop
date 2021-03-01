import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<main className='main'>
					<Switch>
						<Route
							path='/product/:id'
							component={
								ProductPage
							}
						/>
						<Route
							path='/signin'
							component={
								SignInPage
							}
						/>
						<Route
							path='/register'
							component={
								RegisterPage
							}
						/>
						<Route
							path='/about'
							component={
								AboutPage
							}
						/>

						<Route
							path='/not-found'
							component={
								ErrorPage
							}
						/>
						<Route
							path='/'
							component={
								HomePage
							}
							exact
						/>
						<Redirect to='/not-found' />
					</Switch>
				</main>
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
