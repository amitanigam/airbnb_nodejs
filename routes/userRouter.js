// Core Modules
const path = require('path')

// External module
const express = require('express')
const userRouter = express.Router();

// Local Module
const rootDit = require('../utils/pathUtil')

userRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDit, "views", "home.html"))
})

module.exports = userRouter;