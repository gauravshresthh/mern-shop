import React from 'react';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import products from './../products.js';
import Product from '../components/Product';

const HomePage = () => {
	return (
		<>
			<div className='my-5'>
				<h2
					style={{
						color: '#747474',
					}}>
					Welcome to the
					Nishan Shop
				</h2>
				<p>
					{' '}
					Here, We sell all
					kinds of products to
					ensure our customer
					a guaranteed
					purchase.
				</p>
			</div>
			<Row>
				{products.map(
					(product) => (
						<Col
							key={
								product._id
							}
							sm={12}
							md={6}
							lg={4}
							xl={3}>
							<Product
								product={
									product
								}
							/>
						</Col>
					)
				)}
			</Row>
		</>
	);
};

export default HomePage;
