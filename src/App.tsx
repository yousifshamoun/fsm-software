import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
