import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Route,
    Routes
    // Link
} from 'react-router-dom'

import Landing from './layouts/landing'
import Header from './layouts/header';

function App() {

    const [click, setClick ] = useState(0);

    const buttonClick = () => {
        setClick(click + 1);
        
    }

    // if logged in, 2 different headers 

  return (
    <button style={{backgroundColor: click > 5 ? "green" : "yellow"}} onClick={() => setClick(click + 1)}>clicks: {click}</button>
    // <>
    // <BrowserRouter>
    // <Routes>
    //    <Route path="/landing" element={<Landing />}/>
    //    <Route path="/home" element={<Header />}/> 
    // </Routes>
    // </BrowserRouter>
    // </>

    // <button onClick={}></button>
  );
}

export default App;
    