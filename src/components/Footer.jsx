import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3 bg-dark text-white'>
						Copyright &copy;
						Nishan Shop All
						Rights Reserved ,
						2021.
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
