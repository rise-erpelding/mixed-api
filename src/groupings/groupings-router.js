const express = require('express');
const xss = require('xss');
const GroupingsService = require('./groupings-service');
const path = require('path');
const groupingsRouter = express.Router();
const jsonParser = express.json();

const serializeGrouping = grouping => ({
  id: grouping.id,
  grouping_name: xss(grouping.grouping_name),
  groupings: JSON.parse(xss(JSON.stringify(grouping.groupings))),
  data: JSON.parse(xss(JSON.stringify(grouping.data))),
  date_created: grouping.date_created,
  teacher_id: grouping.teacher_id,
  class_id: grouping.class_id
});

groupingsRouter
  .route('/')
  .get((req, res, next) => {
    GroupingsService.getAllGroupings(req.app.get('db'))
      .then(groupings => {
        res.json(groupings.map(serializeGrouping));
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { grouping_name, groupings, data, teacher_id, class_id } = req.body;
    const newGrouping = { grouping_name, data, teacher_id, class_id };
    // stringify groupings because it is an array
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
          .json(serializeGrouping(grouping))
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
          res.json(groupings.map(serializeGrouping));
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
    .get((req, res, next) => {
      res.json(serializeGrouping(res.grouping));
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
      const { grouping_name, groupings, data, class_id } = req.body;
      const groupingToUpdate = { grouping_name, data, class_id };
      groupingToUpdate.groupings = JSON.stringify(groupings);
      const numberUpdateValuesGiven = Object.values(groupingToUpdate).filter(Boolean).length
      if (numberUpdateValuesGiven === 0) {
        return res
          .status(400)
          .json({
            error: { message: `Request body must contain 'grouping_name', 'data', 'groupings', or 'class_id'` }
          })
      }
      GroupingsService.updateGrouping(
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
  