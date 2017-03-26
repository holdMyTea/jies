'use strict';

import express from 'express';

import controller from '../controllers/medicine.controller';

const router = express.Router();

router.route('/medicine')
	.get(controller.getAllMedicines)
	.post(controller.postMedicine);

router.route('/medicine/:id').get(controller.getMedicineById);

router.route('/medicine/manufacturer/:manufacturer')
	.get(controller.getMedicineByManufacturer);

export default router;
