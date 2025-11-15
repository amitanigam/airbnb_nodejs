// Core Modules
const path = require('path')

// External module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDit = require('../utils/pathUtil')

hostRouter.get('/add-home', (req, res, next) => {
    res.sendFile(path.join(rootDit, "views", "addHome.html"))
})

hostRouter.post('/add-home', (req, res, next) => {
    console.log(req.body)
    res.sendFile(path.join(rootDit, "views", "homeAdded.html"))
})

module.exports = hostRouter;