import chai, {expect} from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'

chai.use(chaiHttp)

function test () {
  const prefix = '/employee'

  const sampleName = 'test-name'
  const samplePhone = 5353535
  let sampleId

  it('should get all employee', (done) => {
    chai.request(app)
      .get(prefix)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res).to.not.equal.null
        done()
      })
  })

  it('should get one employee', (done) => {
    chai.request(app)
      .get(prefix + '/1')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.not.equal.null
        done()
      })
  })

  it('should add an employee', (done) => {
    chai.request(app)
      .post(prefix)
      .send({name: sampleName, phone: samplePhone})
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.eql('Successful')
        done()
      })
  })

  it('should get an employee by name', (done) => {
    chai.request(app)
      .get(prefix + '/name/' + sampleName)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.not.equal.null
        sampleId = JSON.parse(res.text)[0].ID
        done()
      })
  })

  it('should change one employee', (done) => {
    chai.request(app)
        .patch(prefix + '/' + sampleId)
        .send({phone: 8800})
        .end((err, res) => {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res.text).to.eql('Successful')
          done()
        })
  })

  it('should delete one employee', (done) => {
    chai.request(app)
      .del(prefix + '/' + sampleId)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.eql('Successful')
        done()
      })
  })

  it('should add no employees', (done) => {
    chai.request(app)
      .post(prefix)
      .end((err, res) => {
        expect(err).to.not.equal.null
        expect(res).to.have.status(400)
        expect(res.text).to.eql('Insuffitient arguments')
        done()
      })
  })

  it('should change no employees', (done) => {
    chai.request(app)
      .patch(prefix + '/3')
      .end((err, res) => {
        expect(err).to.not.equal.null
        expect(res).to.have.status(400)
        expect(res.text).to.eql('Insuffitient arguments')
        done()
      })
  })
}

export default test
