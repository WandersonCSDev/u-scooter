const express = require('express');
const router = express.Router();
const userControll = require('../controllers/userController');

router.get('/show', userControll.findAll);
router.get('/show/:id', userControll.findUser);
router.put('/update/:id', userControll.updateUser);
router.post('/register', userControll.addUser);
router.delete('/purge/:id', userControll.deleteUser);

router.post('/login', userControll.login);

module.exports = router;
