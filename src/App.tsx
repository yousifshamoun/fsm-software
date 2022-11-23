import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dispatch from "./pages/Dispatch";
import Technician from "./pages/Technician";
import Home from "./pages/Home";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dispatch" element={<Dispatch />} />
                    <Route path="/technician" element={<Technician />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
