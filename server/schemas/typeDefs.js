const { gql } = require("apollo-server-express");


// gql schema ( typeDef queries) are the same name as their resolver endpoints 
// users: [User]! will be the same name as a query { user: () => }

// type Owner {

// }

// type Business {

// }

// type Employee {

// }

const typeDefs = gql`

type Users {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String 
}



    type Auth {
        token: ID!
        user: Users
        # reference either user, owner, or admin
    }   
    
    type Query {

        allUsers: [Users]!

        # user(id: ID!): UserS

    }

    type Mutation {

        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Query
    
        loginUser(email: String!, password: String!): Auth

    }
`;

// This is where we do our gql queries

module.exports = typeDefs;