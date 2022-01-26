const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');