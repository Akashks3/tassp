import React, { useState } from 'react';
import './App.css';
import SearchComponent from './SearchComponent';
import ShowComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';

function App() {
	const [courses] = useState([
		{
			id: 1,
			name: 'MTR Vermicelli 850 g (Sada Semiya)  (Plain)',
			price:61,
			image:
				'https://rukminim2.flixcart.com/image/832/832/xif0q/vermicelli/9/y/i/-original-imagxz8byregjvr4.jpeg?q=70'
		},
		{
			id: 2,
			name: 'Maggi 2-Minute Instant Noodles Vegetarian  (18 x 70 g)',
			price:224,
			image:
				'https://rukminim2.flixcart.com/image/280/280/xif0q/noodle/7/d/6/-original-imagsvxrkzmsttna.jpeg?q=70'
		},
		{
			id: 3,
			name: 'Maggi 2-Minute Masala Noodles, Easy to Make Instant Noodles Vegetarian  (280 g)',
			price:50,
			image:
				'https://rukminim2.flixcart.com/image/280/280/xif0q/noodle/e/7/p/-original-imagxp7egt9xqxmp.jpeg?q=70'
		},
		{
			id: 4,
			name: 'Maggi 2-Minute Masala , Easy to Make Instant Noodles Vegetarian  (12 x 70 g)',
			price:50,
			image:
				'https://rukminim2.flixcart.com/image/280/280/xif0q/noodle/z/b/x/-original-imagz7pabzb2pyqh.jpeg?q=70'
		},
		{
			id: 5,
			name: 'Sunfeast YiPPee! Power Up Atta Noodles Instant Noodles Vegetarian  (280 g)',
			price:75,
			image:
				'https://rukminim2.flixcart.com/image/280/280/xif0q/noodle/d/u/h/-original-imagxuy4rk43phqg.jpeg?q=70'
		},
		{
			id: 6,
			name: 'Sunfeast YiPPee! Magic Masala Instant Noodles Vegetarian  (240 g)',
			price:45,
			image:
				'https://rukminim2.flixcart.com/image/280/280/xif0q/noodle/q/y/e/-original-imah2ku7fakxfsjb.jpeg?q=70'
		},
		{
			id: 7,
			name: 'Maggi 2-Minute Instant Noodles Vegetarian  (18 x 70 g)',
			price:44,
			image:
	'https://rukminim2.flixcart.com/image/280/280/ktizdzk0/pasta/3/r/4/durum-wheat-semolina-regular-flipkart-supermart-original-imag6utdpndfysjg.jpeg?q=70'
		}
		,
		{
			id: 8,
			name: 'Sunfeast YiPPee! Mood Masala Instant Noodles Vegetarian  (260 g)',
			price:52,
			image:
	'https://rukminim2.flixcart.com/image/280/280/xif0q/noodle/k/t/w/-original-imah2ku7newudjkb.jpeg?q=70'
		},
		{
			id: 9,
			name: 'Maggi Nutri licious Veg Atta Masala Instant Noodles Vegetarian  (290 g)',
			price:105,
			image:
	'https://rukminim2.flixcart.com/image/280/280/xif0q/noodle/o/p/9/-original-imahyqazsn4c6s5v.jpeg?q=70'
		},
		{
			id: 10,
			name: 'Maggi 2 Minute Special Masala Instant Noodles Vegetarian  (12 x 70 g)',
			price:197,
			image:
	'https://rukminim2.flixcart.com/image/832/832/xif0q/noodle/x/r/z/-original-imagwbephgddxfqq.jpeg?q=70'
		}
	],);


	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
			.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? {
					...item, quantity: item.quantity + 1
				}
					: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
			.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) =>
				total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
		
			<SearchComponent searchCourse={searchCourse}
				courseSearchUserFunction=
				{courseSearchUserFunction} />
				
			<main className="App-main">
			<div>
				<img src="https://rukminim2.flixcart.com/image/280/280/xif0q/noodle/q/y/e/-original-imah2ku7fakxfsjb.jpeg?q=70" className='Img' alt='{img}' />
				<img src="https://rukminim2.flixcart.com/image/280/280/xif0q/noodle/o/p/9/-original-imahyqazsn4c6s5v.jpeg?q=70" className='Img' alt='{img}' />
				<img src="https://rukminim2.flixcart.com/image/280/280/xif0q/noodle/d/u/h/-original-imagxuy4rk43phqg.jpeg?q=70" className='Img' alt='{img}' />
				</div>
				<ShowComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>
					<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;
