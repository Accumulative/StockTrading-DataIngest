# forge-to-mysql
This is a tool to pull forex data from forge and put it into a mysql database.
To use this, follow these steps:
- create a .env file which follows the specification in [config.ts](https://github.com/Accumulative/forge-to-mysql/blob/master/config.ts).
- create a table with a prices table with the columns (symbol, price, bid, ask)
- change which pairs are desired in index.ts
- make sure typescript is installed
- compile the typescript into javascript by running `tsc -p .` within the project folder
- run the index.js with node inside the dist folder
