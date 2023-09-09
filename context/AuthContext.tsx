// AuthContext.tsx

import React, { createContext, useEffect, useState, useContext } from 'react';
import { onAuthStateChanged, getUserDocument } from "../lib/firebaseClient";
import { useAppDispatch } from '../redux/hooks';
import { setUser, setLoading } from '../redux/userSlice';  
import firebase from 'firebase/compat/app';
import Cookies from 'js-cookie';
import { ExtendedUser, SerializableUser } from '../types';
import { convertUserToSerializableUser } from '../utils';  
import { SignInMethod } from '../types'; 

const AuthContext = createContext({ user: null as ExtendedUser | null, loading: true });

export const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [auth, setAuth] = useState({ user: null as ExtendedUser | null, loading: true });

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const firebaseUser = firebase.auth().currentUser;
      if (firebaseUser) {
        const doc = await getUserDocument(firebaseUser.uid);
        if (doc) {
          const signInMethod: SignInMethod = doc.name ? 'nimandpassword' : 'google';
          const extendedUser: ExtendedUser = {
            ...firebaseUser,
            signInMethod: signInMethod,
            doc: doc,
          };
          const serializableUser = convertUserToSerializableUser(extendedUser, signInMethod);
          dispatch(setUser(serializableUser));
          setAuth({ user: extendedUser, loading: false });
          Cookies.remove('unauthorized-access');
        } else {
          console.error(`User document does not exist for uid: ${firebaseUser.uid}`);
        }
      }
    }

    fetchCurrentUser();
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (user) => {
      if (user) {
        const doc = await getUserDocument(user.uid);
        if (doc !== null) {
          const signInMethod: SignInMethod = doc.name ? 'nimandpassword' : 'google';
          const extendedUser = {
            ...user,
            signInMethod: signInMethod,
            doc: doc,
          } as ExtendedUser;
          const serializableUser = convertUserToSerializableUser(extendedUser, signInMethod);
          dispatch(setUser(serializableUser));
          setAuth({ user: extendedUser, loading: false });
          Cookies.remove('unauthorized-access');
        } else {
          console.error(`User document does not exist for uid: ${user.uid}`);
        }
      } else {
        dispatch(setUser(null));
        setAuth({ user: null, loading: false });
      }
      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
