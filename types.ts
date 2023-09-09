// types.ts

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export type FirebaseUser = firebase.User;

export interface UserDocument {
  uid: string;
  name: string;
  nim: string;
  email?: string;  
}

export type SignInMethod = 'nimandpassword' | 'google';

export interface ExtendedUser extends firebase.User {
  doc?: UserDocument | null;
  signInMethod?: SignInMethod;
}

export type SerializableUser = {
  uid: string,
  email: string | null,
  doc: UserDocument | null,
  signInMethod?: SignInMethod;
};
