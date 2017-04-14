import database from '../services/db'

function getAllMedicines (req, res) {
  database.select('*').from('MEDICINES')
  .then(rows => {
    res.status(200)
    res.json(rows)
  })
  .catch(error => {
    console.error(error.stack)
    res.status(500)
    res.send('Taking heavy casulties')
  })
}

function addMedicine (req, res) {
  const body = req.body

  if (body.NAME && body.MANUFACTURER && body.DOSAGE) {
    database('MEDICINES').insert(
      {NAME: body.NAME, MANUFACTURER: body.MANUFACTURER, DOSAGE: body.DOSAGE}
    )
    .then(rows => {
      res.status(200)
      res.send('Successful')
    })
    .catch(error => {
      console.error(error.stack)
      res.status(500)
      res.send('Taking heavy casulties')
    })
  } else {
    res.status(400)
    res.send('Insuffitient arguments')
  }
}

function editMedicine (req, res) {
  const id = req.params.id
  const body = req.body

  if (!(body.NAME || body.MANUFACTURER || body.DOSAGE)) {
    res.status(400)
    res.send('Insuffitient arguments')
    return
  }

  let obj = {}
  if (body.NAME) {
    obj.NAME = body.NAME
  }
  if (body.MANUFACTURER) {
    obj.MANUFACTURER = body.MANUFACTURER
  }
  if (body.DOSAGE) {
    obj.DOSAGE = body.DOSAGE
  }

  database('MEDICINES').where('ID', id).update(obj)
  .then(rows => {
    res.status(200)
    res.send('Successful')
  })
  .catch(error => {
    console.error(error.stack)
    res.status(500)
    res.send('Taking heavy casulties')
  })
}

function deleteMedicine (req, res) {
  database('MEDICINES').where('ID', req.params.id).del()
  .then(rows => {
    res.status(200)
    res.send('Successful')
  })
  .catch(error => {
    console.error(error.stack)
    res.status(500)
    res.send('Taking heavy casulties')
  })
}

function getMedicineById (req, res) {
  database.select('*').from('MEDICINES').where('ID', req.params.id)
  .then(rows => {
    res.status(200)
    res.json(rows)
  })
  .catch(error => {
    console.error(error.stack)
    res.status(500)
    res.send('Taking heavy casulties')
  })
}

function getMedicineByName (req, res) {
  database.select('*').from('MEDICINES').where('NAME', req.params.name)
  .then(rows => {
    res.status(200)
    res.json(rows)
  })
  .catch(error => {
    console.error(error.stack)
    res.status(500)
    res.send('Taking heavy casulties')
  })
}

function getMedicineByManufacturer (req, res) {
  database.select('*').from('MEDICINES').where('MANUFACTURER', req.params.manufacturer)
  .then(rows => {
    res.status(200)
    res.json(rows)
  })
  .catch(error => {
    console.error(error.stack)
    res.status(500)
    res.send('Taking heavy casulties')
  })
}

export default {
  getAllMedicines,
  addMedicine,
  editMedicine,
  deleteMedicine,
  getMedicineById,
  getMedicineByManufacturer,
  getMedicineByName
}
