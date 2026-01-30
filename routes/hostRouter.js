// Core Modules
// const path = require('path')

// External module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const homesControllers = require('../controllers/hostController')

hostRouter.get('/add-home', homesControllers.getAddHome)
hostRouter.post('/add-home', homesControllers.postAddHome)
hostRouter.get('/host-home-list', homesControllers.getHostHomes)

module.exports = hostRouter;