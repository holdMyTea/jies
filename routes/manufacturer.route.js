'use strict';

import express from 'express';

import controller from '../controllers/manufacturer.controller';

const router = express.Router();

router.route('/manufacturer')
	.get(controller.getAllManufacturers)
	.post(controller.postManufacturer);

router.route('/manufacturer/country/:country')
	.get(controller.getManufacturersByCountry);

router.route('/manufacturer/:id')
	.get(controller.getManufacturerById);

export default router;
