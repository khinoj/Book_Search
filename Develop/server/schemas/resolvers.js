// require user model
const { User } = require('../models');
// require signToken function from auth
const { signToken } = require('../utils/auth');
// requires AuthenticationError from apollo-server-express
const { AuthenticationError } = require('apollo-server-express');

