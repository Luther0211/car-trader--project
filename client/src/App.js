import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [state, setState] = useState({
        data: false
    })

    useEffect(() => {
        if(!state.data) {
            apiTest()
        }
    })

    const apiTest = () => {
        fetch('http://localhost:8080/api')
            .then(res => res.json())
            .then(data => setState({...data}))        
    }
    
  return (
    <div className="App">
        fetch data from server: { state.data }
    </div>
  );
}

export default App;
