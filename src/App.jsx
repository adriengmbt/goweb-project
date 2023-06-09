import React from 'react';
import "./styles/Main.scss"
import Home from './pages/homePage/Home';
import {  Route, Routes } from 'react-router-dom';
import Details from './pages/detailsPage/Details';


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
