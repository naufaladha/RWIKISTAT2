// pages/api/sessionLogin.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { auth } from '../../lib/firebaseAdmin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { idToken } = req.body;

        // Verify and decode the ID token
        const decodedToken = await auth.verifyIdToken(idToken);
        const uid = decodedToken.uid;
        const email = decodedToken.email;

        // Set cookie expiry to 7 days
        const expiresIn = 60 * 60 * 24 * 7 * 1000; // milliseconds

        // Create a JWT using the ID token and add user data
        const sessionCookie = jwt.sign({ idToken, uid, email }, process.env.JWT_SECRET!, { expiresIn });

        // Set a httpOnly session cookie
        res.setHeader('Set-Cookie', cookie.serialize('session', sessionCookie, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: expiresIn,
          path: '/',
        }));

        res.status(200).send({ status: "success" });
      } catch (e) {
        res.status(400).send({ error: "Could not log in." });
      }
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
