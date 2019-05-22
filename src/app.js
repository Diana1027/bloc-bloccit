/* eslint-disable react/jsx-filename-extension */
const express = require('express');

const app = express();

const routeConfig = require('./config/route-config.js');

routeConfig.init(app);
module.exports = app;
