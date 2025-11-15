// Core Modules
const path = require('path')

// External module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDit = require('../utils/pathUtil')

hostRouter.get('/add-home', (req, res, next) => {
    res.render('addHome', { pageTitle: 'Add Home', currentPage: 'addHome' })
})

const registerHome = [];

hostRouter.post('/add-home', (req, res, next) => {
    console.log('Home Registration successful for:', req.body)
    registerHome.push(req.body);
    res.render('homeAdded', { pageTitle: 'Home Added Successfully', currentPage: 'homeAdded' })
})

exports.hostRouter = hostRouter;
exports.registerHome = registerHome;