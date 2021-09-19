const express = require('express');
const Sequelize = require('sequelize')
const route = express.Router();

const translateController = require('../Controllers/translate');

route.post('/translate', translateController.getTranslatedResponse);

module.exports = route ;