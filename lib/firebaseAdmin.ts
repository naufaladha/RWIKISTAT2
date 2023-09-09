import admin from "firebase-admin";

const privateKey = process.env.FIREBASE_PRIVATE_KEY!
  .replace(/\\n/g, '\n');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: privateKey
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  });

  // Optional: Enable session persistence, if you are managing user sessions
  // admin.auth().setPersistence(admin.auth.Auth.Persistence.NONE);
}

const auth = admin.auth();
export { auth };
