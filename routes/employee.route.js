'use strict';

import express from 'express';

import controller from '../controllers/employee.controller';

const router = express.Router();

router.route('/')
	.post(controller.postEmployee)
	.get(controller.getAllEmployees);

router.get('/:id', controller.getEmployeeById);

export default router;
