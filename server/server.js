const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { authMiddleware } = require('./utils/auth');