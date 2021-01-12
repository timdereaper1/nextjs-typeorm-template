import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from '../entities/user';

export function getDBConnection() {
	return createConnection({
		type: 'mysql',
		database: process.env.DB_NAME,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		entities: [User],
		synchronize: process.env.NODE_ENV !== 'production',
	});
}
