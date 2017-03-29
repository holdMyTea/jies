'use strict';

import express from 'express';

import controller from '../controllers/medicine.controller';

const router = express.Router();

router.route('/')
	.get(controller.getAllMedicines)
	.post(controller.postMedicine);

router.get('/:id', controller.getMedicineById);

router.get('/manufacturer/:manufacturer', controller.getMedicineByManufacturer);

export default router;
