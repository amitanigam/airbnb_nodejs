// Core Modules
const path = require('path')

// External module
const express = require('express')
const userRouter = express.Router();

// Local Module
// const rootDit = require('../utils/pathUtil')
const { registerHome } = require('./hostRouter')

userRouter.get('/', (req, res, next) => {
    console.log(registerHome)
    res.render("home", { registerHome: registerHome, pageTitle: 'airbnb Home' })
})

module.exports = userRouter;