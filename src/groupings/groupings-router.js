const express = require('express');
const xss = require('xss');
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
  })
  .post(jsonParser, (req, res, next) => {
    const { grouping_name, groupings, data, teacher_id, class_id } = req.body;
    // const newGrouping = { grouping_name, groupings, data, teacher_id, class_id };
    const newGrouping = { grouping_name, data, teacher_id, class_id };
    newGrouping.groupings = JSON.stringify(groupings);
    for (const [key, value] of Object.entries(newGrouping))
      if (value === null) {
        return res
          .status(400)
          .json({
            error: { message: `Missing ${key} in request body` }
          })
      }
    GroupingsService.addGrouping(
      req.app.get('db'),
      newGrouping
    )
      .then(grouping => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${grouping.id}`))
          .json(grouping)
      })
      .catch(next)
  })

  groupingsRouter
    .route('/teacher/:teacher_id')
    .all((req, res, next) => {
      GroupingsService.getTeacherById(
        req.app.get('db'),
        req.params.teacher_id
      )
      .then(teacher => {
        if (!teacher) {
          return res
            .status(404)
            .json({
              error: { message: 'Teacher does not exist' }
            })
        }
        res.teacher = teacher;
        next();
      })
      .catch(next);
    })
    .get((req, res, next) => {
      GroupingsService.getGroupingByTeacherId(
        req.app.get('db'),
        req.params.teacher_id
      )
      .then(groupings => {
        if (!groupings.length) {
          return res
            .status(404)
            .json({
              error: { message: 'No groupings found for specified teacher' }
            });
        }
        else {
          res.json(groupings);
        }
      })
      .catch(next);
    })

    groupingsRouter
    .route('/:id')
    .all((req, res, next) => {
      GroupingsService.getGroupingById(
        req.app.get('db'),
        req.params.id
      )
      .then(grouping => {
        if (!grouping) {
          return res
            .status(404)
            .json({
              error: { message: `Grouping does not exist` }
            });
        }
        res.grouping = grouping;
        next()
      })
      .catch(next)
    })
    .get((req, res) => {
      res.json(res.grouping);
    })
    .delete((req, res, next) => {
      GroupingsService.removeGrouping(
        req.app.get('db'),
        req.params.id
      )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
    })
    .patch(jsonParser, (req, res, next) => {
      const { grouping_name, groupings, class_id } = req.body;
      const groupingToUpdate = { grouping_name, groupings,  class_id };
      const numberUpdateValuesGiven = Object.values(groupingToUpdate).filter(Boolean).length
      if (numberUpdateValuesGiven === 0) {
        return res
          .status(400)
          .json({
            error: { message: `Request body must contain 'grouping_name', 'groupings', or 'class_id'` }
          })
      }
      GroupingsService.updateGroupingName(
        req.app.get('db'),
        req.params.id,
        groupingToUpdate
      )
        .then(numRowsAffected => {
          res
            .status(204)
            .end()
        })
        .catch(next)
    });

  module.exports = groupingsRouter;
  