const { gql } = require("apollo-server-express");


const typeDefs = gql`

    type Auth {
        token: ID!
        # reference either user, owner, or admin
    }   
    
    type Query {

    }

    type Mutation {

    }
`;

// This is where we do our gql queries

module.exports = typeDefs;