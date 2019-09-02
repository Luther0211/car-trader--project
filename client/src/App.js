import React, {useState} from 'react';
import './bootstrap.css';
import './App.css';
// COMPONENTS
import Navbar from './components/Navbar/Navbar'

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

        
        <button onClick={apiTest}>Search</button>

        {state.data.map((elem, i) => {
            return <p>POST #{i+1}: {elem.title}</p>
        })}

    </div>
  );
}

export default App;
