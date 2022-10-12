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
import UserRegister from "./components/userRegisterForm";
import UserLogin from "./components/userLogin";


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
    // <UserFrom />
    // <>
    <BrowserRouter>
    <Routes>
       {/* <Route path="/landing" element={<Landing />}/>
       <Route path="/home" element={<Header />}/>  */}
       <Route exact path="/register" element={<UserRegister />} />
       <Route exact path="/login" element={<UserLogin />} />
       <Route exact path="/user" element={< Landing />} />
    </Routes>
    </BrowserRouter>
    // </>

    // <button onClick={}></button>
  );
}

export default App;
    