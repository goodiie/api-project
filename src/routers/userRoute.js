const express = require('express');
const router = express.Router();
const users = require('../controllers/userController');

router.get('/allusers', users.getUsers);
router.get('/user/:id', users.searchUser);
router.post('/adduser', users.addUser);
router.put('/updateuser/:id', users.updateUser);
router.delete('/deleteuser/:id', users.deleteUser);

module.exports = router;