// Importing react dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


// Importing components
import Landing from './layouts/landing';
import App from './App';
import Header from './layouts/header';
// import "bootstrap/dist/css/boostrap.min.css"

// Used for routing
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Importing Apollo and Graphql dependencies
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";


// creating client

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache()

})


// Same code as the sandbox
client.query({
  query:gql`
    query Query {
      users {
        firstName
        lastName
        email
        _id
      }
    }
  `
}).then(data => console.log(data))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<Landing />}/>
  //   <Route path="/home" element={<Header />}/>

  // </Routes>
  // </BrowserRouter>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
