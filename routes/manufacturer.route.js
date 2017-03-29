'use strict';

import express from 'express';

import controller from '../controllers/manufacturer.controller';

const router = express.Router();

router.route('/')
	.get(controller.getAllManufacturers)
	.post(controller.addManufacturer);

router.get('/country/:country', controller.getManufacturersByCountry);

router.route('/:id')
	.get(controller.getManufacturerById)
	.put(controller.editManufacturer)
	.delete(controller.deleteManufacturer);

export default router;
