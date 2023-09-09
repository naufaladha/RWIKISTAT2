// pages/api/pdf.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect, { gfs } from '../../../lib/dbConnect';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Connect to the database
  await dbConnect();

  // Check if the GridFS storage is available
  if (!gfs) {
    return res.status(500).json({ error: 'Failed to connect to GridFS storage.' });
  }

  // Handle the different request methods
  if (req.method === 'GET') {
    // Fetch the PDFs from the database
    gfs.find().toArray((err:Error, files:any) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while fetching the PDFs.' });
      }

      if (!files || files.length === 0) {
        return res.status(404).json({ error: 'No PDFs found in the database.' });
      }

      // Return the PDF metadata
      res.status(200).json(files);
    });
  } else {
    // Handle unsupported request methods
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
};

export default handler;
