import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import "./assets/style/registerBusinesscss.css"

import {
    BrowserRouter,
    Route,
    Routes
    // Link
} from 'react-router-dom'

import Landing from './layouts/landing'
import Header from './layouts/header';

import BusinessForm from './components/registerBusinessForm';

function App() {


    // if logged in, 2 different headers 

  return (
    <BusinessForm />
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
    