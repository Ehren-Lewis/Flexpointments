import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
  // Link
} from 'react-router-dom'

// Import Apollo Dependencies
import { useQuery, gql} from "@apollo/client";

// Import styling ?? 
import './App.css';
import "./assets/style/registerBusinesscss.css"




// Importing components
import Landing from './layouts/landing'
import Header from './layouts/header';
import BusinessForm from './components/registerBusinessForm';
import UserFrom from "./components/userRegisterForm";



const GET_USERS = gql`
  query Query {
    users {
      firstName
      lastName
      email
    }
  }
`

function App() {

  const { loading, err, data } = useQuery(GET_USERS)

    // if logged in, 2 different headers 

  return (
    // <BusinessForm />
    <UserFrom />
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
    