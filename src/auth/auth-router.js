const express = require('express');
const jsonParser = express.json();
const AuthService = require('./auth-service');

const authRouter = express.Router();

authRouter
.post('/login', jsonParser, (req, res, next) => {
  const { teacher_name, password } = req.body;
  const loginTeacher = { teacher_name, password };
  console.log(loginTeacher);
  for (const [key, value] of Object.entries(loginTeacher))
    if (value == null)
      return res.status(400).json({
        error: `Missing '${key}' in request body`
      });

  AuthService.getUserWithUserName(
    req.app.get('db'),
    loginTeacher.teacher_name
  )
    .then(dbTeacher => {
      if (!dbTeacher)
        return res.status(400).json({
          error: 'Incorrect teacher_name or password'
        });
      return AuthService.comparePasswords(loginTeacher.password, dbTeacher.password)
        .then(compareMatch => {
          if (!compareMatch)
            return res.status(400).json({
              error: 'Incorrect teacher_name or password'
            });

            const sub = dbTeacher.teacher_name;
            const payload = { user_id: dbTeacher.id };
            res.send({
              authToken: AuthService.createJwt(sub, payload),
            });
        });
    })
    .catch(next);
  });

module.exports = authRouter;