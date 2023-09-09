import dbConnect from "../../lib/dbConnect";
import type { NextApiRequest, NextApiResponse } from 'next';
import Test from "../../model/modeltest";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Call the dbConnect() function before handling the request
  await dbConnect();

  // Insert a document into the Test collection
  const testDoc = new Test({
    message: "Connection test",
  });

  try {
    const savedTestDoc = await testDoc.save();
    res.status(200).json({ success: true, data: savedTestDoc });
  } catch (error: any) {
    console.error("Error inserting test document:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
