const express = require('express');
const router = express.Router();
const { jwtVerify, isSchemaValid } = require('../middleware/verify');
const { createTask, emailAndTask, editTask, Signin, Login } = require('../middleware/validations');
const usersControllers = require('../controller/usersControllers');
const taskControllers = require('../controller/taskControllers');

router.post('/login', isSchemaValid(Login), usersControllers.login);
router.post('/signin', isSchemaValid(Signin), usersControllers.signin);
router.post('/create-task', jwtVerify, isSchemaValid(createTask),taskControllers.createTask);
router.post('/view-all-pending', jwtVerify, taskControllers.viewPendingTask);
router.post('/view-all-completed', jwtVerify, taskControllers.viewCompletedTask);
router.post('/view-one-task', jwtVerify, isSchemaValid(emailAndTask), taskControllers.viewOneTask);
router.patch('/edit-task', jwtVerify, isSchemaValid(editTask), taskControllers.editTask);
router.patch('/mark-done', jwtVerify, isSchemaValid(emailAndTask), taskControllers.markAsDone);
router.delete('/detete-task', jwtVerify, isSchemaValid(emailAndTask), taskControllers.deleteTask);

module.exports = router;