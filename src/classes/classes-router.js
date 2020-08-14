const express = require('express');
const xss = require('xss');
const ClassesService = require('./classes-service');
const path = require('path');
const classesRouter = express.Router();
const jsonParser = express.json();

const serializeClassName = classInfo => ({
  id: classInfo.id,
  class_name: xss(classInfo.class_name),
  date_created: classInfo.date_created,
  teacher_id: classInfo.teacher_id
})

classesRouter
  .route('/')
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
  .all((req, res, next) => {
    ClassesService.getTeacherById(
      req.app.get('db'),
      req.params.teacher_id
    )
      .then(teacher => { // review this
        if (!teacher) {
          return res.status(404).json({
            error: { message: 'Teacher does not exist' }
          })
        }
        res.teacher = teacher
        next()
      })
      .catch(next)
  })
  .get((req, res, next) => {
    ClassesService.getClassByTeacherId(
      req.app.get('db'),
      req.params.teacher_id
    )
    .then(classes => {
      res.json(classes.map(serializeClassName));
    })
    .catch(next);
  });

  classesRouter
    .route('/:id')
    .all((req, res, next) => {
      ClassesService.getClassByClassId(
        req.app.get('db'),
        req.params.id
      )
      .then(classRes => {
        if (!classRes) {
          return res
            .status(404)
            .json({
              error: { message: `Class does not exist` }
            })
        }
        res.classRes = classRes;
        next()
      })
      .catch(next)
    })
    .get((req, res) => {
      res.json(res.classRes);
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
    });


  module.exports = classesRouter;
  