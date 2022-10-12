import { gql } from "@apollo/client";




export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        email
        password
      }
      token
    }
}
`


// const LOGIN_USER = gql`
// mutation Mutation($email: String!, $password: String!) {
//     loginUser(email: $email, password: $password) {
//     users {
//         email
//         password
//     }
//     token
// }
// }
// `
// export { LOGIN_USER }