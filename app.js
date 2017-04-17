'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import vars from './config/variables'
import employee from './routes/employee.route'
import manufacturer from './routes/manufacturer.route'
import medicine from './routes/medicine.route'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(morgan('common'))

app.use('/employee', employee)
app.use('/manufacturer', manufacturer)
app.use('/medicine', medicine)

app.get('/', (request, response) => response.send('Kappa'))

app.listen(vars.APP_PORT, vars.APP_HOST, () => console.log('Listening'))

export default app
