import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

describe('server',() => {

	it('should return Kappa', () => {
		chai.request(app)
			.get('/')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);

				expect(res).to.eql('Kappa');
			});
	});
});

describe('employee', () => {
	const prefix = '/employee';

	it('should return all employee', () => {
		chai.request(app)
			.get(prefix)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);

				expect(res).to.not.equal.null;
			});
	});

	it('should add an employee', () => {
		chai.request(app)
			.post(prefix)
			.field('name', 'test-name')
			.field('phone', 88005353535)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);

				expect(res).to.eql('Successful');
			});
	});

	it('should add no employees', () => {
		chai.request(app)
			.post(prefix)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(400);

				expect(res).to.eql('Insuffitient arguments');
			});
	});

	it('should get one employee', () => {
		chai.request(app)
			.get(prefix+'/1')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(400);

				expect(res).to.not.equal.null;
			})
	});

	it('should change one employee', () => {
		chai.request(app)
			.put(prefix+'/2')
			.field('name', 'test-name')
			.field('phone', 88005353535)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);

				expect(res).to.eql('Successful');
			});
	});

	it('should change no employees', () => {
		chai.request(app)
			.put(prefix+'/3')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(400);

				expect(res).to.eql('Insuffitient arguments');
			});
	});

	it('should delete one employee', () => {
		chai.request(app)
			.del(prefix+'/3')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);

				expect(res).to.eql('Successful');
			});
	});
})
