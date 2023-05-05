import React from 'react';
import './App.scss';

import Home from './components/HomePage/Home';
import {  Route, Routes } from 'react-router-dom';
import Details from './components/DetailsPage/Details';


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
    
  );
}


export default App;
