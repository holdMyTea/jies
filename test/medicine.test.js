import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'

chai.use(chaiHttp)

function test () {
  const prefix = '/medicine'

  const sampleName = 'Kapparin'
  const sampleManufacturer = 9
  const sampleDosage = 0.42
  let sampleId

  it('should get all medicines', (done) => {
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

  it('should get one medicine', (done) => {
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

  it('should get medicines by manufacturer', (done) => {
    chai.request(app)
      .get(prefix + '/manufacturer/1')
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

  it('should add medicine', (done) => {
    chai.request(app)
      .post(prefix)
      .send({name: sampleName, manufacturer: sampleManufacturer, dosage: sampleDosage})
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

  it('should get medicine by name', (done) => {
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

  it('should change one medicine', (done) => {
    chai.request(app)
      .patch(prefix + '/' + sampleId)
      .send({dosage: 4.2})
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

  it('should delete one medicine', (done) => {
    chai.request(app)
      .delete(prefix + '/' + sampleId)
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

  it('should add no medicines', (done) => {
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

  it('should edit no medicines', (done) => {
    chai.request(app)
      .patch(prefix + '/2')
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
