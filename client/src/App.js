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
        data: []
    })

  

    const apiTest = () => {
        fetch('/api')
            .then(res => res.json())
            .then(data => setState({data: [...data]}))        
    }
    
  return (
    <div className="App">
        <Router>
            <Navbar />


                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route exact path="/results" component={() => <Results />} />
                    <Route exact path="/listing/:id" component={() => <h1>Listing Component</h1>} />
                </Switch>

        
        

        
            <button onClick={apiTest}>Search</button>

            {state.data.map((elem, i) => {
                return <p>POST #{i+1}: {elem.title}</p>
            })}

            <Footer />
        </Router>
    </div>
  );
}

export default App;
