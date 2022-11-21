const router = require('express').Router();
const usersServices = require('./users.services');

router.get('/users', usersServices.getAllUsers);
router.post('/users', usersServices.postUser);
router.get('/users/:id', usersServices.getUserById);



module.exports = router;

