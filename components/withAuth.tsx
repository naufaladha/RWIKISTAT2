// withAuth.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth, getUserDocument } from '../lib/firebaseClient';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { FirebaseUser, ExtendedUser, UserDocument } from '../types';
import { convertUserToSerializableUser } from '../utils';
import Cookies from 'js-cookie';

const withAuth = (Component: any) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const showUnauthorizedAccessWarning = Cookies.get('unauthorized-access');

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (user: FirebaseUser | null) => {
        if (user) {
          // get user document
          const doc: UserDocument | null = await getUserDocument(user.uid);
          
          // If doc is null, handle this case (e.g. by redirecting to login, showing an error, etc.)
          if (!doc) {
            console.error('User document not found');
            router.push('/');
            return;
          }
          
          // Create a plain JS object from the firebase user.
          const extendedUser: ExtendedUser = {
            ...user,
            doc: doc,
          };
    
          // Convert to SerializableUser before dispatching.
          const serializableUser = convertUserToSerializableUser(extendedUser, 'nimandpassword');
          dispatch(setUser(serializableUser));
        } else {
          Cookies.set('unauthorized-access', 'You must log in to view this page.');
          router.push('/'); // Redirect to login if user is not authenticated
        }
      });
    
      // Cleanup subscription on unmount
      return () => unsubscribe();
    }, []);

    useEffect(() => {
      if (showUnauthorizedAccessWarning) {
        // Here, you'd trigger your Snackbar or Popup to open.
        // setOpen(true);
        // After displaying the message, remove the cookie.
        Cookies.remove('unauthorized-access');
      }
    }, [showUnauthorizedAccessWarning]);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
