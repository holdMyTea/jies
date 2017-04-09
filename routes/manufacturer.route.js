import express from 'express'

import controller from '../controllers/manufacturer.controller'

const router = express.Router()

router.route('/')
  .get(controller.getAllManufacturers)
  .post(controller.addManufacturer)

router.get('/country/:country', controller.getManufacturersByCountry)

router.route('/:id')
  .get(controller.getManufacturerById)
  .patch(controller.editManufacturer)
  .delete(controller.deleteManufacturer)

router.get('/name/:name', controller.getManufacturerByName)

export default router
