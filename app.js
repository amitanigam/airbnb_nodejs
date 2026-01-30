// Core Modules
const path = require('path')

// External Moduler
const express = require('express');

// Local Module
const storeRouter = require('./routes/storeRouter')
const hostRouter  = require('./routes/hostRouter')
const rootDit = require('./utils/pathUtil')
const errorsControllers = require('./controllers/Errors')

const app = express();

// below call for ejs only
app.set('view engine', 'ejs');
app.set('views', 'views');


// below line har route pe check karega ki koi POST req ayi to use body parse kar ke req.body ke ander dal dena 
app.use(express.urlencoded());
app.use(storeRouter);
app.use('/host', hostRouter);

app.use('/public', express.static(path.join(rootDit, "public")));

app.use(errorsControllers.addError)

const PORT = 3008;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`)
})