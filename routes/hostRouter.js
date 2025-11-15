// Core Modules
const path = require('path')

// External module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDit = require('../utils/pathUtil')

hostRouter.get('/add-home', (req, res, next) => {
    res.render('addHome', { pageTitle: 'Add Home' })
})

const registerHome = [];

hostRouter.post('/add-home', (req, res, next) => {
    console.log('Home Registration successful for:', req.body, req.body.houseName)
    registerHome.push({ houseName: req.body.houseName });
    res.render('homeAdded', { pageTitle: 'Home Added Successfully' })
})

exports.hostRouter = hostRouter;
exports.registerHome = registerHome;