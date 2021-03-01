import React from 'react';
import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Rating from './Rating';

const Product = ({
	product,
}) => {
	return (
		<div>
			<Card
				className='my-3 p-3'
				rounded>
				<LinkContainer
					to={`/product/${product._id}`}>
					<Card.Img
						src={
							product.image
						}
						variant='top'
					/>
				</LinkContainer>

				<Card.Body>
					<LinkContainer
						to={`/product/${product._id}`}>
						<Card.Title as='div'>
							<strong>
								{product.name}
							</strong>
						</Card.Title>
					</LinkContainer>
					<Card.Text as='div'>
						<Rating
							value={
								product.rating
							}
							text={`(${product.numReviews})`}></Rating>
					</Card.Text>
					<Card.Text as='h3'>
						Rs.{product.price}
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Product;
