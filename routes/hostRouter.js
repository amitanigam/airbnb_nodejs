// Core Modules
// const path = require('path')

// External module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const homesControllers = require('../controllers/Homes')

hostRouter.get('/add-home', homesControllers.getAddHome)
hostRouter.post('/add-home', homesControllers.postAddHome)

exports.hostRouter = hostRouter;