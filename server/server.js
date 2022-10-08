

// Adding mongo and the db connection
const mongoose = require("mongoose");
const db = require("./config/connection");
const PORT = process.env.PORT || 3001


const path = require("path");


// Adding the appollo stuff
const { ApolloServer }  = requir("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");

const server = new ApolloServer({
  typeDefs,
  resolvers,
})


// Setting up the express server
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };