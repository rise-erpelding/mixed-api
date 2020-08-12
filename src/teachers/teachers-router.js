const express = require('express');
const TeachersService = require('./teachers-service');
// const path = require('path');
const teachersRouter = express.Router();
// const jsonParser = express.json();

teachersRouter
  .route('/')
  .get((req, res, next) => {
    TeachersService.getAllTeachers(req.app.get('db'))
      .then(teachers => {
        res.json(teachers);
      })
      .catch(next);
  });

  module.exports = teachersRouter;