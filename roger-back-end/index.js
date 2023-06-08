'use strict'

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
require('./app/DBconnection')
const PORT = process.env.PORT || 4000;
const corsOptions = { credentials: true, origin: process.env.URL || '*' };
const app = express()
app.use(express.json())
app.use(cookieParser());
app.use(cors(corsOptions));

// routers
const authRouter = require('./app/routes/authRoutes')
const accessRouter = require('./app/routes/accessRoutes')
const menuesRoutes = require('./app/routes/menuRoutes')
const packageRoute = require('./app/routes/packageRoute')


app.use('/auth', authRouter)
app.use('/access', accessRouter)
app.use('/menues', menuesRoutes)
app.use('/packages', packageRoute)

app.use(express.static('public'));
app.use('/files', express.static('files'));

app.listen(PORT, () => {
    console.log(`Server is listening on port:${PORT}`);
})