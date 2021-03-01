import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

import Rating from '../components/Rating';
import products from '../products';

const ProductPage = (props) => {
	const productId = props.match.params.id;

	const product = products.find((p) => p._id === productId);
	return (
		<div className='m-5 p-5'>
			<Row>
				<Col md={6}>
					<Image
						src={product.image}
						alt={product.image}
						fluid
						style={{
							height: 300,
							width: 300,
						}}
					/>
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating value={product.rating} text={`(${product.numReviews})`} />
						</ListGroup.Item>
						<ListGroup.Item>
							Rs.
							{product.price}
						</ListGroup.Item>
						<ListGroup.Item>{product.description}</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>{product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>
										<strong>
											{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
										</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className='btn-block'
									type='button'
									disabled={product.countInStock === 0}>
									Add to Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default ProductPage;
