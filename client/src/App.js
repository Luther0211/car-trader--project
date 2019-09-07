import React, {useState} from 'react';
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
                condition: [],
                year: '',
                mileage: '',
                make: [],
                body_style: [],
                ext_color: [],
                int_color: [],
                transmission: '',
                doors: []
            },
            result: {
                num_of_results: 0,
                results: []
            },
            redirect_to: ''
        }
    })

    const updateRedirect = () => {
        if(state.redirect_to !== '') {
            const newState = {...state}
            newState.redirect_to = ''
            setState(newState)
        }
    }

    const onSelectChange = (e) => {
        const newState = {...state}

        if(e.target.name === 'make' || e.target.name === 'condition') newState.search.params[e.target.name] = e.target.value ? [e.target.value] : []
        else newState.search.params[e.target.name] = e.target.value

        setState(newState)
    }

    const onFormSubmit = e => {
        e.preventDefault()

        const newState = {...state}
        
        newState.search.params.zip = e.target.zip.value
        // ... get & save all values from input elements
        

        newState.redirect_to = <Redirect to='/search' />
        setState(newState)
    }

    const checkNumValue = e => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }

    // const apiTest = () => {
    //     fetch('/api')
    //         .then(res => res.json())
    //         .then(data => setState({data: [...data]}))        
    // }
    
  return (
    <div className="App">
        <Router>
            <Navbar />

                {state.redirect_to}

                <Switch>
                    <Route exact path="/" component={() => 
                        <Home 
                            carMakes={state.carMakes}
                            formValues={state.search.params}
                            checkNumValue={checkNumValue}
                            onSelectChange={onSelectChange}
                            onFormSubmit={onFormSubmit}
                            updateRedirect={updateRedirect}
                        />
                    } />
                    <Route exact path="/search" component={() => 
                        <Results 
                            carMakes={state.carMakes}
                            formValues={state.search.params}
                            checkNumValue={checkNumValue}
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
