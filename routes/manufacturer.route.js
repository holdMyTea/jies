'use strict';

import express from 'express';

import controller from '../controllers/manufacturer.controller';

const router = express.Router();

router.route('/')
	.get(controller.getAllManufacturers)
	.post(controller.postManufacturer);

router.get('/country/:country', controller.getManufacturersByCountry);

router.get('/:id', controller.getManufacturerById);

export default router;
