// const registerHome = [];
const Home = require('../models/home')

exports.getAddHome = (req, res, next) => {
    res.render('host/addHome', { pageTitle: 'Add Home', currentPage: 'addHome' })
}


exports.getHostHomes = (req, res, next) => {
    const registerHome = Home.fetchAll(registerHome => {
    res.render("host/host-home-list", { registerHome: registerHome, pageTitle: ' Host Homes List', currentPage: 'Host-Homes' })
    });
}


exports.postAddHome =  (req, res, next) => {
    // console.log('Home Registration successful for aaa:', req.body);
    const {houseName, housePrice, houseLocation, rating, ImageUrl} =  req.body;

    const home = new Home(houseName, housePrice, houseLocation, rating, ImageUrl)
    home.save();
    res.render('host/home-added', { pageTitle: 'Home Added Successfully', currentPage: 'homeAdded' })
}
