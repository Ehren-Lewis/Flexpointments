import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './layouts/landing';
import Header from './layouts/header';
// import "bootstrap/dist/css/boostrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<Landing />}/>
  //   <Route path="/home" element={<Header />}/>

  // </Routes>
  // </BrowserRouter>
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
