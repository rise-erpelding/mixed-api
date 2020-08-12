const express = require('express');
const ClassesService = require('./classes-service');
const path = require('path');
const classesRouter = express.Router();
const jsonParser = express.json();

classesRouter
  .route('/')
  .get((req, res, next) => {
    ClassesService.getAllClasses(req.app.get('db'))
      .then(classes => {
        res.json(classes);
      })
      .catch(next);
  });

  module.exports = classesRouter;
  