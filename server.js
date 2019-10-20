const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv-flow').config();

const app = express();

// Importing Routes
const IndexRoutes = require('./routes');
const { errorHandlerMiddleware } = require('./middleware');

// settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(IndexRoutes);

// Error Handler
app.use(errorHandlerMiddleware);

module.exports = app;
