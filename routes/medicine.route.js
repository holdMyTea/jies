import express from 'express';

import controller from '../controllers/medicine.controller';

const router = express.Router();

router.route('/')
	.get(controller.getAllMedicines)
	.post(controller.addMedicine);

router.route('/:id')
	.get(controller.getMedicineById)
	.put(controller.editMedicine)
	.delete(controller.deleteMedicine);

router.get('/manufacturer/:manufacturer', controller.getMedicineByManufacturer);

export default router;
