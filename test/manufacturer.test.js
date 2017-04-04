import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'

chai.use(chaiHttp)

function test () {
  const prefix = '/manufacturer'

  const sampleName = 'Kappa Inc.'
  const samplePhone = 5353535
  const sampleCountry = 'Narnia'
  let sampleId

  it('should get all manufacturers', (done) => {
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

  it('should get one manufacturer', (done) => {
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

  it('should get manufacturers by country', (done) => {
    chai.request(app)
      .get(prefix + '/country/' + sampleCountry)
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

  it('should add manufacturer', (done) => {
    chai.request(app)
      .post(prefix)
      .send({name: sampleName, phone: samplePhone, country: sampleCountry})
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

  it('should get manufacturer by name', (done) => {
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

  it('should change one manufacturer', (done) => {
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

  it('should delete one manufacturer', (done) => {
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

  it('should add no manufacturers', (done) => {
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

  it('should edit no manufacturers', (done) => {
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
