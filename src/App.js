import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rules from './pages/rules';
import Home from './pages/home';
import Header from './component/header';
import Card from './pages/card';
import './App.css';
import Presentation from './pages/presentation';
import Menu from './component/test';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/presentation" element={<Presentation />}/>
          <Route path="/rules" element={<Rules />} />
          <Route path="/card" element={<Card />} />
        </Routes>
        <Menu />
      </Router>
    </div>
  );
}

export default App;

