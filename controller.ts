import * as database from './database';

export interface ForgeModel {
	symbol: string,
	price: number,pbi
	bid: number,
	ask: number,
	timestamp: number
}

export const forgeModelArrayToDb = async (forgeArr: ForgeModel[]) => {
	let query = 'INSERT INTO prices (symbol, price, bid, ask) VALUES ';
	query += forgeArr.map(forge => '("' +
		forge.symbol + '","' + forge.price + '","' + forge.bid + '","' + forge.ask
	+ '")').join(',');
	return database.execute(query);
};