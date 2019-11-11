import React, { useState, useEffect } from 'react';
import './Listing.scss';
// import SwiftSlider from 'react-swift-slider';

const Listing = () => {
	const [ Listing, setListing ] = useState({
		id: '',
		heading: '',
		price: 0,
		listing_url: '',
		dom: 0,
		condition: '',
		miles: 0,
		media: {
			photo_links: []
		},
		extra: {
			features: []
		},
		dealer: {
			id: '',
			website: '',
			name: '',
			street: '',
			city: '',
			state: '',
			country: '',
			latitude: '',
			longitude: '',
			zip: ''
		},
		build: {
			year: 0,
			make: '',
			model: '',
			trim: '',
			body_type: '',
			vehicle_type: '',
			transmisison: '',
			drivetrain: '',
			fuel_type: '',
			engine: '',
			engine_size: '',
			engine_block: '',
			doors: 0,
			cylinders: 0,
			made_in: '',
			steering_type: '',
			antibreak_sys: '',
			tank_size: '',
			overall_height: '',
			overall_length: '',
			overall_width: '',
			highway_miles: '',
			city_miles: ''
		}
	});

	useEffect(
		() => {
			const listingId = window.location.pathname.replace('/listing/', '');
			if (Listing.id !== listingId) {
				const local_listing = JSON.parse(window.localStorage.getItem('local_listing'));
				setListing(local_listing);
				console.log(local_listing);

				// COMMENTED OUT TO NOT FETCH FROM API ON EVERY RELOAD, USING LOCAL DATA WHILE DEVELOPING

				// fetch(`http://localhost:8080/api/listing/${listingId}`)
				// 	.then((res) => res.json())
				// 	.then((res) => {
				// 		const newListing = { ...Listing };
				// 		console.log(res);

				// 		if (res.id) newListing.id = res.id;
				// 		if (res.heading) newListing.heading = res.heading;
				// 		if (res.price) newListing.price = res.price;
				// 		if (res.vdp_url) newListing.listing_url = res.vdp_url;
				// 		if (res.dom) newListing.dom = res.dom;
				// 		if (res.condition) newListing.condition = res.condition;
				// 		if (res.miles) newListing.miles = res.miles;
				// 		if (res.media && res.media.photo_links) newListing.media.photo_links = res.media.photo_links;
				// 		if (res.extra && res.extra.features) newListing.extra.features = res.extra.features;

				// 		if (res.dealer) {
				// 			if (res.dealer.id) newListing.dealer.id = res.dealer.id;
				// 			if (res.dealer.website) newListing.dealer.website = res.dealer.website;
				// 			if (res.dealer.name) newListing.dealer.name = res.dealer.name;
				// 			if (res.dealer.street) newListing.dealer.street = res.dealer.street;
				// 			if (res.dealer.city) newListing.dealer.city = res.dealer.city;
				// 			if (res.dealer.state) newListing.dealer.state = res.dealer.state;
				// 			if (res.dealer.country) newListing.dealer.country = res.dealer.country;
				// 			if (res.dealer.latitude) newListing.dealer.latitude = res.dealer.latitude;
				// 			if (res.dealer.longitude) newListing.dealer.longitude = res.dealer.longitude;
				// 			if (res.dealer.zip) newListing.dealer.zip = res.dealer.zip;
				// 		}

				// 		if (res.build) {
				// 			if (res.build.year) newListing.build.year = res.build.year;
				// 			if (res.build.make) newListing.build.make = res.build.make;
				// 			if (res.build.model) newListing.build.model = res.build.model;
				// 			if (res.build.trim) newListing.build.trim = res.build.trim;
				// 			if (res.build.body_type) newListing.build.body_type = res.build.body_type;
				// 			if (res.build.vehicle_type) newListing.build.vehicle_type = res.build.vehicle_type;
				// 			if (res.build.transmisison) newListing.build.transmisison = res.build.transmisison;
				// 			if (res.build.drivetrain) newListing.build.drivetrain = res.build.drivetrain;
				// 			if (res.build.fuel_type) newListing.build.fuel_type = res.build.fuel_type;
				// 			if (res.build.engine) newListing.build.engine = res.build.engine;
				// 			if (res.build.engine_size) newListing.build.engine_size = res.build.engine_size;
				// 			if (res.build.engine_block) newListing.build.engine_block = res.build.engine_block;
				// 			if (res.build.doors) newListing.build.doors = res.build.doors;
				// 			if (res.build.cylinders) newListing.build.cylinders = res.build.cylinders;
				// 			if (res.build.made_in) newListing.build.made_in = res.build.made_in;
				// 			if (res.build.steering_type) newListing.build.steering_type = res.build.steering_type;
				// 			if (res.build.antibreak_sys) newListing.build.antibreak_sys = res.build.antibreak_sys;
				// 			if (res.build.tank_size) newListing.build.tank_size = res.build.tank_size;
				// 			if (res.build.overall_height) newListing.build.overall_height = res.build.overall_height;
				// 			if (res.build.overall_length) newListing.build.overall_length = res.build.overall_length;
				// 			if (res.build.overall_width) newListing.build.overall_width = res.build.overall_width;
				// 			if (res.build.highway_miles) newListing.build.highway_miles = res.build.highway_miles;
				// 			if (res.build.city_miles) newListing.build.city_miles = res.build.city_miles;
				// 		}

				// 		return newListing;
				// 	})
				// 	.then((newState) => {
				// 		window.localStorage.setItem('local_listing', JSON.stringify(newState));
				// 		setListing(newState);
				// 	});
				// Add a catch block
			}
		},
		[ Listing ]
	);

	const USD_PRICE = Listing.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	const MILES = Listing.miles.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.00', '');

	return (
		<div className="Listing container border bg-white">
			<h1 className="Listing__heading">{Listing.heading}</h1>

			<div className="row">
				<div className="col-12 col-lg-8 p-0">
					<div id="photoControls" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							{Listing.media.photo_links.map((url, i) => (
								<div className={`carousel-item position-relative ${i === 0 ? 'active' : ''}`} key={i}>
									<img src={url} className="d-block w-100" alt="" />
									<p className="carousel__photo-count position-absolute text-center m-0 py-2 px-4">
										{i + 1} / {Listing.media.photo_links.length}
									</p>
								</div>
							))}
						</div>
						<a
							className="slideControls carousel-control-prev"
							href="#photoControls"
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="slideControls carousel-control-next"
							href="#photoControls"
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
				<div className="col p-0">
					<ul className="Listing__list-group list-group font-weight-bold">
						<li className="list-group-item d-flex justify-content-between">
							<span>Price: </span>
							<span className="text-info">${USD_PRICE}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Condition: </span>
							<span className="text-info">{Listing.condition ? Listing.condition : 'New'}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Make: </span>
							<span className="text-info">{Listing.build.make}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Model: </span>
							<span className="text-info">{Listing.build.model}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Body Type: </span>
							<span className="text-info">{Listing.build.body_type}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Miles: </span>
							<span className="text-info">{MILES}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Cylinders: </span>
							<span className="text-info">{Listing.build.cylinders}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Engine: </span>
							<span className="text-info">{Listing.build.engine}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Fuel Type: </span>
							<span className="text-info">{Listing.build.fuel_type}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Doors: </span>
							<span className="text-info">{Listing.build.doors}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Made in: </span>
							<span className="text-info">{Listing.build.made_in}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Listing;
