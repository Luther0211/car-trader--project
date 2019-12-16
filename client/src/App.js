import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './bootstrap.css';
// import './bootstrap.js';
import './fontawesome.css';
import './App.scss';
// COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Results from './components/Results/Results';
import SavedListings from './components/SavedListings/SavedListings';
import Listing from './components/Listing/Listing';
import Footer from './components/Footer/Footer';

function App() {
	const [ savedPosts, setSavedPosts ] = useState([]);
	const [ redirectTo, setRedirectTo ] = useState('');
	const [ searchResults, setSearchResults ] = useState({ num_of_results: 0, listings: [] });
	const [ searchParams, setSearchParams ] = useState({
		zip: '',
		radius: '',
		min_price: '',
		max_price: '',
		condition: '',
		year: '',
		mileage: '',
		make: [],
		body_style: [],
		ext_color: [],
		int_color: [],
		transmission: '',
		doors: [],
		start: 0,
		rows: 25,
		sort_by: ''
	});

	const carMakes = [
		'Acura',
		'Alfa Romeo',
		'AMC',
		'Aston Martin',
		'Audi',
		'Bentley',
		'BMW',
		'Bugatti',
		'Buick',
		'Cadillac',
		'Chevrolet',
		'Chrysler',
		'Daewoo',
		'Datsun',
		'DeLorean',
		'Dodge',
		'Eagle',
		'Ferrari',
		'FIAT',
		'Fisker',
		'Ford',
		'Freightliner',
		'Genesis',
		'Geo',
		'GMC',
		'Honda',
		'HUMMER',
		'Hyundai',
		'INFINITI',
		'Isuzu',
		'Jaguar',
		'Jeep',
		'Karma',
		'Kia',
		'Lamborghini',
		'Land Rover',
		'Lexus',
		'Lincoln',
		'Lotus',
		'Maserati',
		'Maybach',
		'MAZDA',
		'McLaren',
		'Mercedes-Benz',
		'Mercury',
		'MINI',
		'Mitsubishi',
		'Nissan',
		'Oldsmobile',
		'Plymouth',
		'Pontiac',
		'Porsche',
		'RAM',
		'Rolls-Royce',
		'Saab',
		'Saturn',
		'Scion',
		'smart',
		'SRT',
		'Subaru',
		'Suzuki',
		'Tesla',
		'Toyota',
		'Volkswagen',
		'Volvo',
		'Yugo'
	];

	useEffect(
		() => {
			console.log('APP COMPONENT RENDER');
			const car_listings = window.localStorage.getItem('car_listings');

			if (car_listings && car_listings !== JSON.stringify(savedPosts)) {
				setSavedPosts(JSON.parse(car_listings));
			}
		},
		[ savedPosts ]
	);

	const saveToLocal = (newItem) => {
		const newSavedPosts = [ ...savedPosts, newItem ];

		window.localStorage.setItem('car_listings', JSON.stringify(newSavedPosts));
		setSavedPosts(newSavedPosts);

		console.log('LOCAL STORAGE:', JSON.parse(window.localStorage.car_listings));
	};

	const removeFromLocal = (id) => {
		const newSavedPosts = savedPosts.filter((listing) => listing.id !== id);

		window.localStorage.setItem('car_listings', JSON.stringify(newSavedPosts));
		setSavedPosts(newSavedPosts);

		console.log('LOCAL STORAGE:', JSON.parse(window.localStorage.car_listings));
	};

	const resetRedirect = () => {
		if (redirectTo !== '') setRedirectTo('');
	};

	const checkNumValue = (e) => {
		e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
	};

	// const oldFormSubmit = (e) => {
	// Technically not part of a form element but they do update/change the search results.
	// if (e.target.name === 'sort_by') params.sort_by = e.target.value;
	// };

	const carStyleSearch = (e) => {
		const newParams = {
			zip: '',
			radius: '',
			min_price: '',
			max_price: '',
			condition: '',
			year: '',
			mileage: '',
			make: [],
			body_style: [],
			ext_color: [],
			int_color: [],
			transmission: '',
			doors: [],
			start: 0,
			rows: 25,
			sort_by: ''
		};
		const style = e.target.name.toLowerCase();
		const queryString = `body_type=${style}`;

		newParams.body_style = [ style ];
		fetchData(queryString, newParams);
	};

	const onPageChange = (e) => {
		const newSearchParams = { ...searchParams, start: e.target.value * searchParams.rows };
		buildQueryString(newSearchParams);
	};

	const onSortChange = (e) => {
		const newSearchParams = { ...searchParams, sort_by: e.target.value };
		buildQueryString(newSearchParams);
	};

	const getFormValues = (e) => {
		e.preventDefault();
		const newParams = {
			zip: '',
			radius: '',
			min_price: '',
			max_price: '',
			condition: '',
			year: '',
			mileage: '',
			make: [],
			body_style: [],
			ext_color: [],
			int_color: [],
			transmission: '',
			doors: [],
			start: 0,
			rows: 25,
			sort_by: ''
		};

		newParams.zip = e.target.zip.value;
		newParams.condition = e.target.condition.value;

		if (e.target.name === 'home-form') {
			newParams.make = e.target.make.value ? [ e.target.make.value ] : [];
		} else if (e.target.name === 'results-form') {
			newParams.radius = e.target.radius.value;
			newParams.min_price = e.target.min_price.value;
			newParams.max_price = e.target.max_price.value;
			newParams.condition = e.target.condition.value;
			newParams.year = e.target.year.value;
			newParams.mileage = e.target.mileage.value;
			newParams.transmission = e.target.transmission.value;

			e.target.doors.forEach((door) => {
				if (door.checked) newParams.doors.push(door.value);
			});

			e.target.body_style.forEach((style) => {
				if (style.checked) newParams.body_style.push(style.value);
			});

			e.target.ext_color.forEach((color) => {
				if (color.checked) newParams.ext_color.push(color.value);
			});

			e.target.int_color.forEach((color) => {
				if (color.checked) newParams.int_color.push(color.value);
			});

			e.target.make.forEach((make) => {
				if (make.checked) newParams.make.push(make.value);
			});
		}

		buildQueryString(newParams);
	};

	const buildQueryString = (params) => {
		const queryParamsArr = [];

		//Starts building the query string
		if (params.zip) queryParamsArr.push(`zip=${params.zip}`);
		if (params.radius) queryParamsArr.push(`radius=${params.radius}`);

		if (params.min_price || params.max_price) {
			const priceRange = [ 0, 999999 ];
			if (params.min_price) priceRange[0] = params.min_price;
			if (params.max_price) priceRange[1] = params.max_price;
			queryParamsArr.push(`price_range=${priceRange.join('-')}`);
		}

		if (params.condition) queryParamsArr.push(`car_type=${params.condition}`);
		if (params.year) queryParamsArr.push(`year=${params.year}`);
		if (params.mileage) queryParamsArr.push(`miles_range=${params.mileage}`);

		if (params.make.length > 0) queryParamsArr.push(`make=${params.make.join(',')}`);
		if (params.body_style.length > 0) queryParamsArr.push(`body_type=${params.body_style.join(',')}`);
		if (params.ext_color.length > 0) queryParamsArr.push(`exterior_color=${params.ext_color.join(',')}`);
		if (params.int_color.length > 0) queryParamsArr.push(`interior_color=${params.int_color.join(',')}`);
		if (params.transmission) queryParamsArr.push(`transmission=${params.transmission}`);
		if (params.doors.length > 0) queryParamsArr.push(`doors=${params.doors.join(',')}`);

		if (params.sort_by) queryParamsArr.push(params.sort_by);

		queryParamsArr.push(`start=${params.start}`);
		queryParamsArr.push(`rows=${params.rows}`);

		const queryString = queryParamsArr.join('&');

		fetchData(queryString, params);
	};

	const fetchData = (queryString, params) => {
		console.log(`/api/search?${queryString}`);
		// ...fetch data
		fetch(`http://localhost:8080/api/search?${queryString}`) // For local testing
			// fetch(`/api/search?${queryString}`)               // For Production use
			.then((res) => res.json())
			.then((res) => {
				console.log('Client response: ', res);
				const newNum_of_results = res.result && res.result.num_found ? res.result.num_found : 0;
				const newListings = res.result && res.result.listings ? res.result.listings : [];

				setSearchResults({ num_of_results: newNum_of_results, listings: newListings });
				setSearchParams(params);
			})
			.then(() => {
				setRedirectTo(<Redirect to="/search" />);
			})
			.catch((err) => {
				console.log('CATCH ERROR: ', err);
				setSearchResults({ num_of_results: 0, listings: [] });
			});
	};

	return (
		<div className="App">
			<Router>
				<Navbar />

				{redirectTo}

				<Switch>
					<Route
						exact
						path="/"
						component={() => (
							<Home
								carMakes={carMakes}
								searchParams={searchParams}
								checkNumValue={checkNumValue}
								resetRedirect={resetRedirect}
								onFormSubmit={getFormValues}
								carStyleSearch={carStyleSearch}
							/>
						)}
					/>
					<Route
						exact
						path="/search"
						component={() => (
							<Results
								carMakes={carMakes}
								searchParams={searchParams}
								checkNumValue={checkNumValue}
								onFormSubmit={getFormValues}
								onPageChange={onPageChange}
								onSortChange={onSortChange}
								searchResults={searchResults}
								saveToLocal={saveToLocal}
								removeFromLocal={removeFromLocal}
							/>
						)}
					/>
					<Route
						exact
						path="/saved"
						component={() => (
							<SavedListings
								saved={savedPosts}
								saveToLocal={saveToLocal}
								removeFromLocal={removeFromLocal}
							/>
						)}
					/>
					<Route
						exact
						path="/listing/:id"
						component={() => <Listing saveToLocal={saveToLocal} removeFromLocal={removeFromLocal} />}
					/>
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
