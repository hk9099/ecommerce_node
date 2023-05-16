const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/adminController/adminController');

router.get('/', adminController.getLogin);
router.get('/register', adminController.getRegister);
router.get('/dashboard', adminController.dashboard);


exports.router = router;