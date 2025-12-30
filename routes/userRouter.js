// Core Modules
const path = require('path')

// External module
const express = require('express')
const userRouter = express.Router();

// Local Module
const homesControllers = require('../controllers/Homes')

userRouter.get('/', homesControllers.getHomes)

module.exports = userRouter;