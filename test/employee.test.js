import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'

chai.use(chaiHttp)

function test () {
  const prefix = '/employee'

/* kinda doubt should i do it or not
  but the idea is that, new row being POSTed,
  then it's ID acquired through GET by name,
  then, using this ID, it's being PUTted,
  then DELETEd.
  So the DB is not changed through tests
  (besides auto_increment ID).
*/

  const sampleName = 'test-name'
  const samplePhone = 5353535
  let sampleId

  it('should get all employee', (done) => {
    chai.request(app)
      .get(prefix)
      .end((err, res) => {
        if (err) {
          chai.assert.fail(err, undefined, 'Exception is thrown')
        } else {
          res.should.have.status(200)
          res.should.not.equal.null
          done()
        }
      })
  })

  it('should get one employee', (done) => {
    chai.request(app)
      .get(prefix + '/1')
      .end((err, res) => {
        if (err) {
          chai.assert.fail(err, undefined, 'Exception is thrown')
        } else {
          res.should.have.status(200)
          res.text.should.not.equal.null
          done()
        }
      })
  })

  it('should add an employee', (done) => {
    chai.request(app)
      .post(prefix)
      .send({name: sampleName, phone: samplePhone})
      .end((err, res) => {
        if (err) {
          chai.assert.fail(err, undefined, 'Exception is thrown')
        } else {
          res.should.have.status(200)
          res.text.should.eql('Successful')
          done()
        }
      })
  })

  it('should get an employee by name', (done) => {
    chai.request(app)
      .get(prefix + '/name/' + sampleName)
      .end((err, res) => {
        if (err) {
          chai.assert.fail(err, undefined, 'Exception is thrown')
        } else {
          res.should.have.status(200)
          res.text.should.not.equal.null
          sampleId = JSON.parse(res.text)[0].ID
          done()
        }
      })
  })

  it('should change one employee', (done) => {
    chai.request(app)
        .patch(prefix + '/' + sampleId)
        .send({phone: 8800})
        .end((err, res) => {
          if (err) {
            chai.assert.fail(err, undefined, 'Exception is thrown')
          } else {
            res.should.have.status(200)
            res.text.should.eql('Successful')
            done()
          }
        })
  })

  it('should delete one employee', (done) => {
    chai.request(app)
      .del(prefix + '/' + sampleId)
      .end((err, res) => {
        if (err) {
          chai.assert.fail(err, undefined, 'Exception is thrown')
        } else {
          res.should.have.status(200)
          res.text.should.eql('Successful')
          done()
        }
      })
  })

  it('should add no employees', (done) => {
    chai.request(app)
      .post(prefix)
      .end((err, res) => {
        if (!err) {
          console.log('No error, but should be')
        } else {
          res.should.have.status(400)
          res.text.should.eql('Insuffitient arguments')
          done()
        }
      })
  })

  it('should change no employees', (done) => {
    chai.request(app)
      .patch(prefix + '/3')
      .end((err, res) => {
        if (!err) {
          console.log('No error, but should be')
        } else {
          res.should.have.status(400)
          res.text.should.eql('Insuffitient arguments')
          done()
        }
      })
  })
}

export default test
