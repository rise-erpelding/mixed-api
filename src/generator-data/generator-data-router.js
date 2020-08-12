const express = require('express');
const GeneratorDataService = require('./generator-data-service');
const path = require('path');
const generatorDataRouter = express.Router();
const jsonParser = express.json();

generatorDataRouter
  .route('/')
  .get((req, res, next) => {
    GeneratorDataService.getAllGeneratorData(req.app.get('db'))
      .then(generatorData => {
        res.json(generatorData);
      })
      .catch(next);
  });

  module.exports = generatorDataRouter;
  