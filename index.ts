
import config from './config';

const https = require('https');

const pairs = ['EURUSD','GBPJPY','AUDUSD'];

const makeRequest = (url) => new Promise(resolve => {
	console.log(url);
	https.get(url, (resp) => {
		let data = '';

		// A chunk of data has been recieved.
		resp.on('data', (chunk) => {
			data += chunk;
		});

		// The whole response has been received. Print out the result.
		resp.on('end', () => {
			resolve(JSON.parse(data));
		});

	}).on("error", (err) => {
		console.log("Error: " + err.message);
	})
});

import * as controller from './controller';

makeRequest(config.FORGE_API_URL + '/quotes?pairs=' + pairs.join(',') + '&api_key=' + config.FORGE_API_KEY)
	.then((data : controller.ForgeModel[]) => controller.forgeModelArrayToDb(data));