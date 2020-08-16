const express = require('express');
const xss = require('xss');
const ClassesService = require('./classes-service');
const path = require('path');
const classesRouter = express.Router();
const jsonParser = express.json();
const { requireAuth } = require('../middleware/jwt-auth');

const serializeClassName = classInfo => ({
  id: classInfo.id,
  class_name: xss(classInfo.class_name),
  date_created: classInfo.date_created,
  teacher_id: classInfo.teacher_id
})

classesRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    ClassesService.getAllClasses(req.app.get('db'))
      .then(classes => {
        res.json(classes.map(serializeClassName));
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { class_name, teacher_id } = req.body;
    const newClass = { class_name, teacher_id };

    if (!class_name) {
      return res.status(400).json({
        error: { message: `Missing 'class_name' in request body` }
      });
    }
    ClassesService.insertClass(
      req.app.get('db'),
      newClass
    )
    .then(classAdded => {
      res
        .status(201)
        .location(path.posix.join(req.originalUrl, `${classAdded.id}`))
        .json(serializeClassName(classAdded));
    })
    .catch(next);
  });

classesRouter
  .route('/teacher/:teacher_id')
  .all(requireAuth, (req, res, next) => {
    ClassesService.getTeacherById(
      req.app.get('db'),
      req.params.teacher_id
    )
      .then(teacher => {
        if (!teacher) {
          return res.status(404).json({
            error: { message: 'Teacher does not exist' }
          })
        }
        res.teacher = teacher;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    ClassesService.getClassByTeacherId(
      req.app.get('db'),
      req.params.teacher_id
    )
    .then(classes => {
      if (!classes.length) {
        return res.status(404).json({
          error: { message: 'No classes found for specified teacher' }
        });
      }
      else {
        res.json(classes.map(serializeClassName));
      }
    })
    .catch(next);
  });

  classesRouter
    .route('/:id')
    .all(requireAuth, (req, res, next) => {
      ClassesService.getClassByClassId(
        req.app.get('db'),
        req.params.id
      )
      .then(classRes => {
        if (!classRes.length) {
          return res
            .status(404)
            .json({
              error: { message: `Class does not exist` }
            });
        }
        res.classRes = classRes;
        next()
      })
      .catch(next)
    })
    .get((req, res, next) => {
      res.json(res.classRes.map(serializeClassName));
    })
    .delete((req, res, next) => {
      ClassesService.deleteClass(
        req.app.get('db'),
        req.params.id
      )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
    })
    .patch(jsonParser, (req, res, next) => {
      const { class_name } = req.body;
      const classToUpdate = { class_name };
      if (!class_name) {
        return res
          .status(400)
          .json({
            error: { message: `Request body must contain 'class_name'` }
          })
      }
      ClassesService.updateClassName(
        req.app.get('db'),
        req.params.id,
        classToUpdate
      )
        .then(numRowsAffected => {
          res
            .status(204)
            .end()
        })
        .catch(next)
    });


  module.exports = classesRouter;
  