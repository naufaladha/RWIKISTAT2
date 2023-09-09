// lib/firebaseClient.ts

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import axios from 'axios';
import { ExtendedUser } from '../types';
import { setError } from '../store/actions';

const firebaseConfig = {
  apiKey: "AIzaSyAHu3iqLAG1K-D5Pzx-QdQKjUK5vKK0mNY",
  authDomain: "rwikistatweb.firebaseapp.com",
  projectId: "rwikistatweb",
  storageBucket: "rwikistatweb.appspot.com",
  messagingSenderId: "861417185666",
  appId: "1:861417185666:web:8e976c8115db3dbec7af9b",
  measurementId: "G-53S2N1THFE"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export interface UserDocument {
  uid: string;
  name: string;
  nim: string;
}

const getUserDocument = async (uid: string) => {
  const userDocument = await db.doc(`users/${uid}`).get();
  console.log("User document data: ", userDocument.data());

  if (userDocument.exists) {
    const { uid: _, ...rest } = userDocument.data()!;
    return {
      uid,
      ...rest
    } as UserDocument; // Force casting to UserDocument type to avoid TypeScript error
  } else {
    // Handle the case when the user document does not exist.
    // Depending on your needs, you may want to throw an error, return a default value, etc.
    console.error(`User document does not exist for uid: ${uid}`);
    return null;
  }
}

export async function signInWithEmail(email: string, password: string, dispatch: any): Promise<firebase.auth.UserCredential | null> {
  try {
    const result = await auth.signInWithEmailAndPassword(email, password);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      // Only throw if error is an instance of Error
      dispatch(setError(error.message));
    }
    console.error('Error in signInWithEmail:', error);
    return null;
  }
}

export async function signInWithGoogle(dispatch: any): Promise<ExtendedUser | null> {
  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;

    // Create a document for the user in Firestore
    let userDoc: UserDocument | null = null;
    if (user) {
      const { uid, displayName, email } = user;
      userDoc = {
        uid,
        name: displayName || '',
        nim: email || '',
      };
      await db.collection('users').doc(uid).set(userDoc);
    }

    // Transform Firebase user into ExtendedUser
    if (user) {
      return {
        ...user,
        signInMethod: 'google',
        doc: userDoc
      } as ExtendedUser;
    }

    return null;
  } catch (error) {
    if (error instanceof Error) {
      // Only throw if error is an instance of Error
      dispatch(setError(error.message));
    }
    console.error('Error in signInWithGoogle:', error);
    return null;
  }
}

export async function loginAndCreateSession(email: string, password: string) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const idToken = await userCredential.user?.getIdToken();

    // Call your login API endpoint
    const response = await axios.post('/api/sessionLogin', { idToken });

    if (response.status === 200) {
      return { status: 'success' };
    } else {
      return { status: 'error' };
    }
  } catch (error) {
    if (error instanceof Error) {
      // Only throw if error is an instance of Error
      throw error;
    }
    console.error(error);
  }
  
}

export async function registerWithEmail(name: string, NIM: string, password: string) {
  try {
    const fictionalEmail = `${NIM}@yourdomain.com`;
    const res = await auth.createUserWithEmailAndPassword(fictionalEmail, password);
    const user = res.user;
    if (user) {
      await db.collection("users").doc(user.uid).set({
        name,
        authProvider: "nimandpassword",
        nim: NIM,
      });
      return { status: 'success', user };  // Return success status and user object
    }
    return { status: 'failed' };  // Return failed status if no user is created
  } catch (error) {
    if (error instanceof Error) {
      // Only throw if error is an instance of Error
      throw error;
    }
    console.error(error);
  }
}

function onAuthStateChanged(callback: (user: firebase.User | null) => void) {
  return auth.onAuthStateChanged(callback);
}

export { db, storage, auth, onAuthStateChanged, getUserDocument };
