const express = require('express');
const adminRoute = require('../admin/adminRoute');
const userController = require('../../controllers/userController/userController');
const userouter = express.Router();

userouter.get('/', userController.getUser);

userouter.use('/admin', adminRoute.router);

exports.router = userouter;