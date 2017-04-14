import database from '../services/db'

function addManufacturer (req, res) {
  const body = req.body

  if (body.NAME && body.PHONE && body.COUNTRY) {
    database('MANUFACTURERS').insert({
      NAME: body.NAME, PHONE: body.PHONE, COUNTRY: body.COUNTRY
    })
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

function editManufacturer (req, res) {
  const id = req.params.id
  const body = req.body

  if (!(body.NAME || body.PHONE || body.COUNTRY)) {
    res.status(400)
    res.send('Insuffitient arguments')
    return
  }

  let obj = {}
  if (body.NAME) {
    obj.NAME = body.NAME
  }
  if (body.PHONE) {
    obj.PHONE = body.PHONE
  }
  if (body.COUNTRY) {
    obj.CUNTRY = body.COUNTRY
  }

  database('MANUFACTURERS').where('ID', id).update(obj)
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

function getManufacturerByName (req, res) {
  database.select('*').from('MANUFACTURERS').where('NAME', req.params.name)
  .then(rows => {
    res.status(200)
    res.json(rows)
  })
  .catch(error => {
    console.error(error)
    res.status(500)
    res.send('Taking heavy casulties')
  })
}

function deleteManufacturer (req, res) {
  const id = req.params.id

  database('MANUFACTURERS').where('ID', id).del()
  .then(rows => {
    res.status(200)
    res.send('Successful')
  })
  .catch(error => {
    console.error(error)
    res.status(500)
    res.send('Taking heavy casulties')
  })
}

function getManufacturersByCountry (req, res) {
  database.select('*').from('MANUFACTURERS').where('COUNTRY', req.params.country)
  .then(rows => {
    res.status(200)
    res.json(rows)
  })
  .catch(error => {
    console.error(error)
    res.status(500)
    res.send('Taking heavy casulties')
  })
}

function getAllManufacturers (req, res) {
  database.select('*').from('MANUFACTURERS')
  .then(rows => {
    res.status(200)
    res.json(rows)
  })
  .catch(error => {
    console.error(error)
    res.status(500)
    res.send('Taking heavy casulties')
  })
}

function getManufacturerById (req, res) {
  database.select('*').from('MANUFACTURERS').where('ID', req.params.id)
  .then(rows => {
    res.status(200)
    res.json(rows)
  })
  .catch(error => {
    console.error(error)
    res.status(500)
    res.send('Taking heavy casulties')
  })
}

export default {
  getManufacturerByName,
  addManufacturer,
  editManufacturer,
  deleteManufacturer,
  getManufacturersByCountry,
  getAllManufacturers,
  getManufacturerById
}
