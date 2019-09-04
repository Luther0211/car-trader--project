import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './bootstrap.css';
import './fontawesome.css';
import './App.scss';
// COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
    const [state, setState] = useState({
        data: []
    })

  

    const apiTest = () => {
        fetch('/api')
            .then(res => res.json())
            .then(data => setState({data: [...data]}))        
    }
    
  return (
    <div className="App">
        <Navbar />

            <Router>

                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route exact path="/search" component={() => (<h1>Search Component</h1>)} />
                    <Route exact path="/listing/:id" component={() => <h1>Listing Component</h1>} />
                </Switch>

            </Router>
        
        

        
        <button onClick={apiTest}>Search</button>

        {state.data.map((elem, i) => {
            return <p>POST #{i+1}: {elem.title}</p>
        })}

        <Footer />
    </div>
  );
}

export default App;
