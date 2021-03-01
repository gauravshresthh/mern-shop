import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
const ErrorPage = () => {
	return (
		<div className='text-center my-5'>
			<h2>Soory , The requested page is not found on our website</h2>
			<LinkContainer to='/'>
				<Button className='btn btn-secondary'>Go To Homepage</Button>
			</LinkContainer>
		</div>
	);
};

export default ErrorPage;
