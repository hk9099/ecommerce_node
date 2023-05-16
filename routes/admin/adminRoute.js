const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/adminController/adminController');

router.get('/', adminController.getLogin);
router.get('/register-user', adminController.getRegister);
router.get('/dashboard', adminController.dashboard);

router.post('/register', adminController.postRegister);

exports.router = router;