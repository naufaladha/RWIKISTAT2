import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Establish a connection to the database
  await dbConnect();

  // Handle your API logic here
  res.status(200).json({ message: 'Connected to MongoDB Atlas' });
}
