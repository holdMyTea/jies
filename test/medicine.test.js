import chai, {expect} from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'

chai.use(chaiHttp)

describe('medicine', () => {
  const prefix = '/medicine'

  const sampleName = 'Kapparin'
  const sampleManufacturer = 9
  const sampleDosage = 0.42
  let sampleId

  it('should get all medicines', (done) => {
    chai.request(app)
      .get(prefix)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.body).to.not.equal.null
        done()
      })
  })

  it('should get one medicine', (done) => {
    chai.request(app)
      .get(prefix + '/1')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.body).to.not.equal.null
        done()
      })
  })

  it('should get medicines by manufacturer', (done) => {
    chai.request(app)
      .get(prefix + '/manufacturer/1')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.body).to.not.equal.null
        done()
      })
  })

  it('should add medicine', (done) => {
    chai.request(app)
      .post(prefix)
      .send({NAME: sampleName, MANUFACTURER: sampleManufacturer, DOSAGE: sampleDosage})
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.eql('Successful')
        done()
      })
  })

  it('should get medicine by name', (done) => {
    chai.request(app)
      .get(prefix + '/name/' + sampleName)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.body).to.not.equal.null
        sampleId = res.body[0].ID
        done()
      })
  })

  it('should change one medicine', (done) => {
    chai.request(app)
      .patch(prefix + '/' + sampleId)
      .send({DOSAGE: 4.2})
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.eql('Successful')
        done()
      })
  })

  it('should delete one medicine', (done) => {
    chai.request(app)
      .delete(prefix + '/' + sampleId)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.eql('Successful')
        done()
      })
  })

  it('should add no medicines', (done) => {
    chai.request(app)
      .post(prefix)
      .end((err, res) => {
        expect(err).to.not.equal.null
        expect(res).to.have.status(400)
        expect(res.text).to.eql('Insuffitient arguments')
        done()
      })
  })

  it('should edit no medicines', (done) => {
    chai.request(app)
      .patch(prefix + '/2')
      .end((err, res) => {
        expect(err).to.not.equal.null
        expect(res).to.have.status(400)
        expect(res.text).to.eql('Insuffitient arguments')
        done()
      })
  })
})
