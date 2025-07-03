
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.showAllUsers);
router.get('/create', userController.createUserForm);
router.post('/create', userController.saveUser);
router.get('/edit/:id', userController.editUserForm);
router.post('/edit/:id', userController.updateUser);
router.post('/delete/:id', userController.deleteUser);

// restful part routes
router.post('/createUser', userController.saveUser1);
router.get('/users', userController.showAllUsers1);
router.get('/users/:id', userController.getUserById);
router.put('/updateUser/:id', userController.updateUser1);
router.delete('/deleteUser/:id', userController.deleteUser1);

module.exports = router;
