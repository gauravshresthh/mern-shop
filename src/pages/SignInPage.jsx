import React, {
	useState,
} from 'react';
import {
	Form,
	Button,
} from 'react-bootstrap';

const LoginPage = () => {
	const [
		email,
		setEmail,
	] = useState('');
	const [
		password,
		setPassword,
	] = useState('');

	const handleSubmit = (
		e
	) => {
		e.preventDefault();
		alert(
			`Welcome to Nishan Shop , ${email}`
		);
	};
	return (
		<>
			<h1 className='text-center my-5'>
				Sign In
			</h1>
			<Form
				onSubmit={
					handleSubmit
				}>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>
						Email address
					</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						autoFocus
						value={email}
						onChange={(e) =>
							setEmail(
								e
									.currentTarget
									.value
							)
						}
					/>
					<Form.Text className='text-muted'>
						We'll never share
						your email with
						anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label>
						Password
					</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) =>
							setPassword(
								e
									.currentTarget
									.value
							)
						}
					/>
				</Form.Group>

				<Button
					variant='primary'
					type='submit'>
					Sign In
				</Button>
			</Form>
		</>
	);
};

export default LoginPage;
