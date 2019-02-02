import 'mocha';
import * as chai from 'chai';
import * as controller from '../controller';
chai.should();

describe('Test group', () => {
	it('Can put forge data into the database', (done) => {
		controller.forgeModelArrayToDb([
			{
				symbol: 'test',
				price: 23,
				bid: 1,
				ask: 2,
				timestamp: Date.now()
			} as controller.ForgeModel
		]).then(res => {
			res.should.not.be.null;
			done();
		})
	});
});