require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');

const teachersRouter = require('./teachers/teachers-router');
const classesRouter = require('./classes/classes-router');
const groupingsRouter = require('./groupings/groupings-router');
const generatorDataRouter = require('./generator-data/generator-data-router');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/teachers', teachersRouter);
app.use('/api/classes', classesRouter);
app.use('/api/groupings', groupingsRouter);
app.use('/api/generator-data', generatorDataRouter);

app.get('/', (req, res) => {
  res.send('Hello, MixEd API!');
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
})

module.exports = app;