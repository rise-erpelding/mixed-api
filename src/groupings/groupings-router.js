const express = require('express');
const GroupingsService = require('./groupings-service');
const path = require('path');
const groupingsRouter = express.Router();
const jsonParser = express.json();

groupingsRouter
  .route('/')
  .get((req, res, next) => {
    GroupingsService.getAllGroupings(req.app.get('db'))
      .then(groupings => {
        res.json(groupings);
      })
      .catch(next);
  });

  module.exports = groupingsRouter;
  