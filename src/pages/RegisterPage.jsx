import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		alert(`Welcome to Nishan Shop , ${email}`);
	};

	return (
		<div className='my-4'>
			<h1 className='text-center my-5'>Register</h1>

			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.currentTarget.value)}
					/>
				</Form.Group>{' '}
				<Form.Group controlId='formBasicNumber'>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type='number'
						placeholder='Enter Your Phone Number'
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.currentTarget.value)}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check
						type='checkbox'
						label='I agree to the terms and conditions of the application'
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					SIGN UP
				</Button>
			</Form>
		</div>
	);
};

export default RegisterPage;
