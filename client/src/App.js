import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './bootstrap.css';
import './fontawesome.css';
import './App.scss';
// COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Results from './components/Results/Results'
import Footer from './components/Footer/Footer';

function App() {
    const [state, setState] = useState({
        carMakes: ['Acura','Alfa Romeo', 'AMC', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Daewoo', 'Datsun', 'DeLorean', 'Dodge', 'Eagle', 'Ferrari', 'FIAT', 'Fisker', 'Ford', 'Freightliner', 'Genesis', 'Geo', 'GMC', 'Honda', 'HUMMER', 'Hyundai', 'INFINITI', 'Isuzu', 'Jaguar', 'Jeep', 'Karma', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'MAZDA', 'McLaren', 'Mercedes-Benz', 'Mercury', 'MINI', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Plymouth', 'Pontiac', 'Porsche', 'RAM', 'Rolls-Royce', 'Saab', 'Saturn', 'Scion', 'smart', 'SRT', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo', 'Yugo'],
        search: {
            params: {
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
            },
            result: {
                num_of_results: 0,
                listings: []
            },
            redirect_to: ''
        },
        saved_posts: [],
        loading: false
    })

    const params = {...state.search.params}

    useEffect(() => {    
        const car_listings = window.localStorage.getItem('car_listings')
        
        if(car_listings && car_listings !== JSON.stringify(state.saved_posts) ) {
            const newState = {...state}
            newState.saved_posts = JSON.parse(car_listings)
            setState(newState)
        }
    })

    const saveToLocal = (data) => {
        const newState = {...state}
        
        newState.saved_posts.push(data)

        window.localStorage.setItem('car_listings', JSON.stringify(newState.saved_posts))
        setState(newState)
        console.log('LOCAL STORAGE:', JSON.parse(window.localStorage.car_listings))
    }

    const removeFromLocal = (id) => {
        const newState = {...state}
        newState.saved_posts = newState.saved_posts.filter(listing => listing.id !== id)

        window.localStorage.setItem('car_listings', JSON.stringify(newState.saved_posts))
        setState(newState)
        console.log('LOCAL STORAGE:', JSON.parse(window.localStorage.car_listings))
    }

    const updateRedirect = () => {
        if(state.redirect_to !== '') {
            const newState = {...state}
            newState.redirect_to = ''
            setState(newState)
        }
    }

    const checkNumValue = e => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }

    const onFormChange = (e) => {
        if (e.target.name === 'home-make') params.make = e.target.value ? [e.target.value] : []
        else if (
            e.target.name === 'make' || 
            e.target.name === 'body_style' || 
            e.target.name === 'ext_color' || 
            e.target.name === 'int_color' || 
            e.target.name === 'doors'
        ) {
            if(params[e.target.name].includes(e.target.value)) params[e.target.name] = params[e.target.name].filter(elem => elem !== e.target.value)
            else params[e.target.name].push(e.target.value)
        }
        else params[e.target.name] = e.target.value
        console.log(params)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()

        const newState = {...state}
        const queryParams = []

        newState.search.params = params

        if(params.zip) queryParams.push(`zip=${params.zip}`)
        if(params.radius) queryParams.push(`radius=${params.radius}`)
        
        if(params.min_price || params.max_price) {
            const priceRange = [0, 999999]
            if(params.min_price) priceRange[0] = params.min_price
            if(params.max_price) priceRange[1] = params.max_price
            queryParams.push(`price_range=${priceRange.join('-')}`)
        }

        if(params.condition) queryParams.push(`car_type=${params.condition}`)
        if(params.year) queryParams.push(`year=${params.year}`)
        if(params.mileage) queryParams.push(`miles_range=${params.mileage}`)

        if(params.make.length > 0) queryParams.push(`make=${params.make.join(',')}`)
        if(params.body_style.length > 0) queryParams.push(`body_type=${params.body_style.join(',')}`)
        if(params.ext_color.length > 0) queryParams.push(`exterior_color=${params.ext_color.join(',')}`)
        if(params.int_color.length > 0) queryParams.push(`interior_color=${params.int_color.join(',')}`)
        if(params.transmission) queryParams.push(`transmission=${params.transmission}`)
        if(params.doors.length > 0) queryParams.push(`doors=${params.doors.join(',')}`)
        
        if(e.target.name === 'sort_by') {
            newState.search.params[e.target.name] = e.target.value
            queryParams.push(e.target.value)
        }
        
        if(e.target.name === 'pageChange') {
            newState.search.params.start = (e.target.value * newState.search.params.rows)
        }
        
        queryParams.push(`start=${newState.search.params.start}`)
        queryParams.push(`rows=${params.rows}`)
        
        console.log( `/api/search?${queryParams.join('&')}` )

        // ...fetch data
        fetch(`http://localhost:8080/api/search?${queryParams.join('&')}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                newState.search.result.num_of_results = res.result.num_found
                newState.search.result.listings = res.result.listings
            })
            .then(() => {
                newState.redirect_to = <Redirect to='/search' />
                setState(newState)
            })
            
    }



  return (
    <div className="App">
        <Router>
            <Navbar />

                {state.redirect_to}

                <Switch>
                    <Route exact path="/" component={() => 
                        <Home 
                            carMakes={state.carMakes}
                            checkNumValue={checkNumValue}
                            updateRedirect={updateRedirect}
                            onFormChange={onFormChange}
                            onFormSubmit={onFormSubmit}
                        />
                    } />
                    <Route exact path="/search" component={() => 
                        <Results 
                            carMakes={state.carMakes}
                            formValues={state.search.params}
                            checkNumValue={checkNumValue}
                            onFormChange={onFormChange}
                            onFormSubmit={onFormSubmit}
                            resultData={state.search.result}
                            saveToLocal={saveToLocal}
                            removeFromLocal={removeFromLocal}
                        />
                    } />
                    <Route exact path="/listing/:id" component={() => <h1>Listing Component</h1>} />
                </Switch>

        
        

{/*         
            <button onClick={apiTest}>Search</button>

            {state.data.map((elem, i) => {
                return <p>POST #{i+1}: {elem.title}</p>
            })} */}

            <Footer />
        </Router>
    </div>
  );
}

export default App;
