import { gql } from "@apollo/client";

const GET_ALL_USERS = gql`
    query Query {
        allUsers {
          firstName
          lastName
          email
          _id
        } 
    }
`


const CREATE_USER = gql`
mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      users {
        email
        firstName
        lastName
        email
        password
      }
    }
  }

`

// const GET_USER = gql`
// type Query {

// }
// `

    export  { GET_ALL_USERS, CREATE_USER }