// actions.ts

import { ExtendedUser } from '../types'; 
import { convertUserToSerializableUser } from '../utils';  

export const signInWithEmailAction = (user: ExtendedUser) => { 
  const serializableUser = convertUserToSerializableUser(user, 'nimandpassword');
  return {
    type: "SIGN_IN_WITH_EMAIL",
    payload: serializableUser,
  };
};

export const signInWithGoogleAction = (user: ExtendedUser) => { 
  const serializableUser = convertUserToSerializableUser(user, 'google');
  return {
    type: "SIGN_IN_WITH_GOOGLE",
    payload: serializableUser,
  };
};

export const setError = (error: string) => ({
  type: "SET_ERROR",
  payload: error,
});
