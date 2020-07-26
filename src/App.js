import React from 'react';
import './App.css';
import Home from '../src/components/layout/home';
import Navbar from '../src/components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      
    </div>
  );
}

export default App;
