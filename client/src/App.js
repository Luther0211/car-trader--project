import React, {useState} from 'react';
import './App.css';

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
        
        <button onClick={apiTest}>Search</button>

        {state.data.map((elem, i) => {
            return <p>POST #{i+1}: {elem.title}</p>
        })}

    </div>
  );
}

export default App;
