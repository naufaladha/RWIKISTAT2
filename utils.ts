// utils.ts

import { UserDocument, ExtendedUser, SerializableUser, SignInMethod } from './types';

export const convertUserToSerializableUser = (user: ExtendedUser, method: SignInMethod): SerializableUser => {  
  return {
    uid: user.uid,
    email: user.email,
    doc: user.doc ?? null,
    signInMethod: method
  };
};
