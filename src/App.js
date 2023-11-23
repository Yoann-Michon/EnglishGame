import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rules from './pages/rules';
import Home from './pages/home';
import Header from './component/header';
import Card from './pages/card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/rules" element={<Rules />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

