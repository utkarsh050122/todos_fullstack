const express = require('express');
const authController = require('../auth/auth');
const authController1 = require('../todoTask/task');
const authController2 = require('../todoTask/edit_del');

const router = express.Router();
          
router.post('/register', authController.register );
router.get('/register',authController.register)

router.post('/login', authController.login );
router.get('/login',authController.login)

router.get('/logout', authController.logout );

router.post('/task',authController1.task);
router.put('/edit/:id',authController2.edit);
router.delete('/edit/:id', authController2.delete); 


module.exports = router;