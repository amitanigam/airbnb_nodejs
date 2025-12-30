const registerHome = [];

exports.getAddHome = (req, res, next) => {
    res.render('addHome', { pageTitle: 'Add Home', currentPage: 'addHome' })
}

exports.postAddHome =  (req, res, next) => {
    console.log('Home Registration successful for:', req.body)
    registerHome.push(req.body);
    res.render('homeAdded', { pageTitle: 'Home Added Successfully', currentPage: 'homeAdded' })
}

exports.getHomes = (req, res, next) => {
    console.log(registerHome)
    res.render("home", { registerHome: registerHome, pageTitle: 'airbnb Home', currentPage: 'Home' })
}
exports.registerHome = registerHome;