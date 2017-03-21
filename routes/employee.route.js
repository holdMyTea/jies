'use strict';

import express from 'express';

import controller from '../controllers/employee.controller';

const router = express.Router();

router.route('/employee')
	.post(controller.postEmployee)
	.get(controller.getAllEmployees);

router.get('/employee/:id', controller.getEmployeeById);

export default router;
