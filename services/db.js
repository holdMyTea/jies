import knex from 'knex'

import vars from '../config/variables'

export default knex({
  client: 'mysql',
  connection: {
    host: vars.DB_HOST,
    user: vars.DB_USER,
    password: '',
    database: vars.DB_DATABASE
  }
})
