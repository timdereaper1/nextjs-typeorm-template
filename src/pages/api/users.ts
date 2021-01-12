import { NextApiRequest, NextApiResponse } from 'next';
import { getRepository } from 'typeorm';
import { User } from '../../modules/_shared/entities/user';
import { getDBConnection } from '../../modules/_shared/services/databaseService';

export default async function (_: NextApiRequest, res: NextApiResponse) {
	const connection = await getDBConnection();
	const userRepo = getRepository(User);
	const users = await userRepo.find();
	await connection.close();
	res.status(200).json({ data: users });
}
