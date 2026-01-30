// const registerHome = [];
const Home = require('../models/home')

exports.getIndex = (req, res, next) => {
    const registerHome = Home.fetchAll(registerHome => {
    res.render("store/index", { registerHome: registerHome, pageTitle: 'airbnb Home', currentPage: 'index' })
    });
}

exports.getHomes = (req, res, next) => {
    const registerHome = Home.fetchAll(registerHome => {
    res.render("store/home-list", { registerHome: registerHome, pageTitle: 'Homes List', currentPage: 'Home' })
    });
}

exports.getBookings = (req, res, next) => {
    res.render("store/bookings", { 
        pageTitle: 'My Bookings', 
        currentPage: 'bookings' 
    })
}


exports.getFavouriteList = (req, res, next) => {
    const registerHome = Home.fetchAll(registerHome => {
    res.render("store/favourite-list", { 
        registerHome: registerHome, 
        pageTitle: 'My Favourites', 
        currentPage: 'Favourites' 
     })
    });
}


exports.getHomeDetails = (req, res, next) => {

    const homeId = req.params.homeId;

    Home.findById(homeId, home => {

        if(!home){
            console.log("Home not found!!");
            res.redirect("/homes");
        } else {
            res.render("store/home-details", { 
            home : home,
            pageTitle: 'Home Details', 
            currentPage: 'Home' 
      })
        }

        

    })
}

