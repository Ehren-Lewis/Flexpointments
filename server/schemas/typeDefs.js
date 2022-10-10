const { gql } = require("apollo-server-express");


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
        # reference either user, owner, or admin
    }   
    
    type Query {

        users: [Users]

    }

    type Mutation {

        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Query

    }
`;

// This is where we do our gql queries

module.exports = typeDefs;