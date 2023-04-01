import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get("http://localhost:5000/api").then((response) => {
      console.log(response)
    })
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
