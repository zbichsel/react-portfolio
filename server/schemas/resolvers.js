const { AuthenticationError } = require('apollo-server-express');
const { User, Plant } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
                return user;
            }

            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        deleteUser: async (parent, args) => {
            const { _id } = args;

            try {
                const deletedUser = await User.findByIdAndDelete(_id);

                if (!deletedUser) {
                    throw new Error('User not found');
                }

                return { _id: deletedUser._id };
            } catch (error) {
                throw new Error(`Error deleting user: ${error.message}`);
            }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
    }
};

module.exports = resolvers;
