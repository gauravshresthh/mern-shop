const products = [
	{
		_id: '1',
		name:
			'Razer DeathAdder Elite ',
		image:
			'https://static-01.daraz.com.np/p/467eb322111a83cb989da609bba44243.jpg',
		description:
			'16,000dpi optical sensor - On-the-fly sensitivity adjustment .DPI buttons at your fingertips and razer chroma customisable lighting',
		brand: 'Apple',
		category: 'Electronics',
		price: 5000.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		_id: '2',
		name:
			'ACER NITRO 5 INTEL CORE I5-9TH GEN/8GB RAM/ 256GB SSD/ 4GB NVIDIA GTX 1650 GRAPHICS',
		image:
			'https://static-01.daraz.com.np/p/423cab847f0970c5b351c5e89f4ef7f1.png',
		description:
			'ACER NITRO 5 INTEL CORE I5-9TH GEN/8GB RAM/ 256GB SSD/ 4GB NVIDIA GTX 1650 GRAPHICS ',
		brand: 'Acer',
		category: 'Electronics',
		price: 80000,
		countInStock: 7,
		rating: 4.0,
		numReviews: 8,
	},
	{
		_id: '3',
		name:
			'Ryzen 5 3500X MSI GTX1660 Super Gaming Z 6GB with Monitor Complete Gaming PC Set',
		image:
			'https://static-01.daraz.com.np/p/mdc/f9c86080144b96fad8cb6d78e09b562c.jpg',
		description:
			'Ryzen 5 3500X MSI GTX1660 Super Gaming Z 6GB with Monitor Complete Gaming PC Set',
		brand: 'Cannon',
		category: 'Electronics',
		price: 140500,
		countInStock: 5,
		rating: 3,
		numReviews: 12,
	},
	{
		_id: '4',
		name:
			'Fantech Hg15 Captain 7.1 Stereo Gaming Headset',
		image:
			'https://static-01.daraz.com.np/p/3a3ef33fd3c0cc1e76d61bd5aa28dae4.jpg',
		description:
			'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
		brand: 'Fantech',
		category: 'Electronics',
		price: 139500,
		countInStock: 11,
		rating: 5,
		numReviews: 12,
	},
	{
		_id: '5',
		name:
			'Fantech HELIOS XD3',
		image:
			'https://static-01.daraz.com.np/p/ae69d516dc97ac346422ae8c0341de48.png ',
		description:
			'Fantech HELIOS XD3 premium wireless wired mouse pixart 3335 built in battery wired',
		brand: 'Fantech',
		category: 'Electronics',
		price: 8549,
		countInStock: 7,
		rating: 3.5,
		numReviews: 10,
	},
	{
		_id: '6',
		name: 'Redragon K551',
		image:
			'https://static-01.daraz.com.np/p/3a0064d8fb75a201e3ac9dab1efc2a17.jpg',
		description:
			'Redragon K551 Mechanical Gaming Keyboard SingelLED Backlit Wired Keyboard with Red Switches for Windows Gaming PC (104 Keys, Black)',
		brand: 'Reddragon',
		category: 'Electronics',
		price: 39999,
		countInStock: 0,
		rating: 4,
		numReviews: 12,
	},
	{
		_id: '7',
		name:
			'Razer DeathAdder Elite ',
		image:
			'https://static-01.daraz.com.np/p/467eb322111a83cb989da609bba44243.jpg',
		description:
			'16,000dpi optical sensor - On-the-fly sensitivity adjustment .DPI buttons at your fingertips and razer chroma customisable lighting',
		brand: 'Apple',
		category: 'Electronics',
		price: 5000.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		_id: '8',
		name:
			'ACER NITRO 5 INTEL CORE I5-9TH GEN/8GB RAM/ 256GB SSD/ 4GB NVIDIA GTX 1650 GRAPHICS',
		image:
			'https://static-01.daraz.com.np/p/423cab847f0970c5b351c5e89f4ef7f1.png',
		description:
			'ACER NITRO 5 INTEL CORE I5-9TH GEN/8GB RAM/ 256GB SSD/ 4GB NVIDIA GTX 1650 GRAPHICS ',
		brand: 'Acer',
		category: 'Electronics',
		price: 80000,
		countInStock: 7,
		rating: 4.0,
		numReviews: 8,
	},
	{
		_id: '9',
		name:
			'Ryzen 5 3500X MSI GTX1660 Super Gaming Z 6GB with Monitor Complete Gaming PC Set',
		image:
			'https://static-01.daraz.com.np/p/mdc/f9c86080144b96fad8cb6d78e09b562c.jpg',
		description:
			'Ryzen 5 3500X MSI GTX1660 Super Gaming Z 6GB with Monitor Complete Gaming PC Set',
		brand: 'Cannon',
		category: 'Electronics',
		price: 140500,
		countInStock: 5,
		rating: 3,
		numReviews: 12,
	},
	{
		_id: '10',
		name:
			'Fantech Hg15 Captain 7.1 Stereo Gaming Headset',
		image:
			'https://static-01.daraz.com.np/p/3a3ef33fd3c0cc1e76d61bd5aa28dae4.jpg',
		description:
			'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
		brand: 'Fantech',
		category: 'Electronics',
		price: 139500,
		countInStock: 11,
		rating: 5,
		numReviews: 12,
	},
	{
		_id: '11',
		name:
			'Fantech HELIOS XD3',
		image:
			'https://static-01.daraz.com.np/p/ae69d516dc97ac346422ae8c0341de48.png ',
		description:
			'Fantech HELIOS XD3 premium wireless wired mouse pixart 3335 built in battery wired',
		brand: 'Fantech',
		category: 'Electronics',
		price: 8549,
		countInStock: 7,
		rating: 3.5,
		numReviews: 10,
	},
	{
		_id: '12',
		name: 'Redragon K551',
		image:
			'https://static-01.daraz.com.np/p/3a0064d8fb75a201e3ac9dab1efc2a17.jpg',
		description:
			'Redragon K551 Mechanical Gaming Keyboard SingelLED Backlit Wired Keyboard with Red Switches for Windows Gaming PC (104 Keys, Black)',
		brand: 'Reddragon',
		category: 'Electronics',
		price: 39999,
		countInStock: 0,
		rating: 4,
		numReviews: 12,
	},
];

export default products;
