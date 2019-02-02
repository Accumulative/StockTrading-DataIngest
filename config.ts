import * as dotenv from "dotenv";
dotenv.config();

let path;
switch (process.env.NODE_ENV) {
	case "test":
		path = `${__dirname}/.env.test`;
		break;
	case "production":
		path = `${__dirname}/.env.production`;
		break;
	default:
		path = `${__dirname}/.env`;
}
dotenv.config({ path: path });

interface Env {
	FORGE_API_URL: string;
	FORGE_API_KEY: string;
	DATABASE_HOST: string;
	DATABASE_USER: string;
	DATABASE_PASSWORD: string;
	DATABASE_NAME: string;
}

export default (process.env as any) as Env;