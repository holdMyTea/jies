import chai from 'chai'

import testEmployee from './employee.test'
import testManufacturer from './manufacturer.test'
import testMedicine from './medicine.test'

// the one and only unhandled warning
let should = chai.should()

describe('empolyee', testEmployee)
describe('manufacturer', testManufacturer)
describe('medicine', testMedicine)
