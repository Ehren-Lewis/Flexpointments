// This is where we import our models
const { assertNamedType } = require("graphql");
const { Users } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const { signToken } = require("../utils/auth");


const resolvers = {
    Query: {
        allUsers: async () => {
            return Users.find({});
        },

        // singleUser: async(parent, {email}) => {
        //     const currentUser = await Users.findOne({email});
        //     return currentUser;
        // }
    },

    Mutation: {
        addUser: async (parent, {firstName, lastName, email, password}) => {
            const user = await Users.create({firstName, lastName, email, password});
            return user;
    },

    loginUser: async(parent, {email, password}) => {
        const currentUser = await Users.findOne({email});


        if (!currentUser) {
            console.log('in here')
            throw new AuthenticationError("No user has been found")
        }

        if (!currentUser.comparePassword(password)) {
            console.log('in here here')
            throw new AuthenticationError("Incorrect email or password");
        }


        const token = signToken({currentUser, user: true});

        return { token, user: currentUser };
    }

}
}

module.exports = resolvers;