const mysql = require('mysql');
import config from './config';
const connection = mysql.createConnection({
	host     : config.DATABASE_HOST,
	user     : config.DATABASE_USER,
	password : config.DATABASE_PASSWORD,
	database : config.DATABASE_NAME
});

export const execute = (query) => new Promise(resolve => {
	connection.connect();
	console.log(query);
	connection.query(query, function (error, results) {
		console.log(error);
		if (error) resolve(null);
		connection.end();
		resolve(results);
	});
});