// This is where we import our models
const { assertNamedType } = require("graphql");
const { Users } = require("../models");


const resolvers = {
    Query: {
        users: async () => {
            return Users.find();
        }
    },

    Mutation: {
        addUser: async (parent, {firstName, lastName, email, password}) => {
            const user = await Users.create({firstName, lastName, email, password});
            return user;
    }
}
}

module.exports = resolvers;