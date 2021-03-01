import React from 'react';

const ProductPage = (
	props
) => {
	const productId =
		props.match.params.id;
	return (
		<h1 className='text-center my-5'>
			Prouct Details page for
			Product id :{productId}
		</h1>
	);
};

export default ProductPage;
