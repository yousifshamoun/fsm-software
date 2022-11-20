import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
