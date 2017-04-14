import database from '../services/db'

function addEmployee (req, res) {
  const body = req.body

  if (body.NAME && body.PHONE) {
    database('EMPLOYEES').insert({NAME: body.NAME, PHONE: body.PHONE})
    .then(rows => {
      res.status(200)
      res.send('Successful')
    })
    .catch(error => {
      console.error(error)
      res.status(500)
      res.send('Taking heavy casulties')
    })
  } else {
    res.status(400)
    res.send('Insuffitient arguments')
  }
}

function editEmployee (req, res) {
  const id = req.params.id
  const body = req.body

  if (!(body.NAME || body.PHONE)) {
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

  /* should i do just:
  database('EMPLOYEES').where('ID', id).update(body)
  or is it too dangerous? */

  database('EMPLOYEES').where('ID', id).update(obj)
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

function deleteEmployee (req, res) {
  const id = req.params.id

  database('EMPLOYEES').where('ID', id).del()
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

function getAllEmployees (req, res) {
  database.select('*').from('EMPLOYEES')
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

function getEmployeeById (req, res) {
  const id = req.params.id

  if (Number.isInteger(Number(id))) {
    database.select('*').from('EMPLOYEES').where('id', id)
    .then(rows => {
      res.status(200)
      res.json(rows[0])
    })
    .catch(error => {
      console.error(error.stack)
      res.status(500)
      res.send('Taking heavy casulties')
    })
  }
}

function getEmployeeIdByName (req, res) {
  const name = req.params.name

  database.select('*').from('EMPLOYEES').where('NAME', name)
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
  getEmployeeById,
  addEmployee,
  getAllEmployees,
  editEmployee,
  deleteEmployee,
  getEmployeeIdByName
}
