import chai, {expect} from 'chai'
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
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.not.equal.null
        done()
      })
  })

  it('should get one manufacturer', (done) => {
    chai.request(app)
      .get(prefix + '/1')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.not.equal.null
        done()
      })
  })

  it('should get manufacturers by country', (done) => {
    chai.request(app)
      .get(prefix + '/country/' + sampleCountry)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.not.equal.null
        done()
      })
  })

  it('should add manufacturer', (done) => {
    chai.request(app)
      .post(prefix)
      .send({name: sampleName, phone: samplePhone, country: sampleCountry})
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.eql('Successful')
        done()
      })
  })

  it('should get manufacturer by name', (done) => {
    chai.request(app)
      .get(prefix + '/name/' + sampleName)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.not.equal.null
        sampleId = res.body[0].ID
        done()
      })
  })

  it('should change one manufacturer', (done) => {
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

  it('should delete one manufacturer', (done) => {
    chai.request(app)
      .delete(prefix + '/' + sampleId)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.text).to.eql('Successful')
        done()
      })
  })

  it('should add no manufacturers', (done) => {
    chai.request(app)
      .post(prefix)
      .end((err, res) => {
        expect(err).to.not.equal.null
        expect(res).to.have.status(400)
        expect(res.text).to.eql('Insuffitient arguments')
        done()
      })
  })

  it('should edit no manufacturers', (done) => {
    chai.request(app)
      .patch(prefix + '/2')
      .end((err, res) => {
        expect(err).to.not.equal.null
        expect(res).to.have.status(400)
        expect(res.text).to.eql('Insuffitient arguments')
        done()
      })
  })
}

export default test
