// LoginForm.tsx

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signInWithEmail as firebaseSignInWithEmail, signInWithGoogle, getUserDocument } from '../lib/firebaseClient';
import { useRouter } from 'next/router';
import { FormikHelpers } from 'formik';
import Image from "next/image";
import googleicon4 from "../Assets/googleicon4.png";
import { useDispatch } from 'react-redux';
import { setError } from '../store/actions';
import { FirebaseUser, ExtendedUser, UserDocument } from '../types';
import { setUser, setLoading as setLoadingState } from '../redux/userSlice';
import { db } from '../lib/firebaseClient';
import { convertUserToSerializableUser } from '../utils';
import { useState } from 'react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const initialValues = {
    nim: '',
    password: '',
  };
  
  const validationSchema = Yup.object({
    nim: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async (values: typeof initialValues, { setSubmitting }: FormikHelpers<typeof initialValues>) => {
    try {
      dispatch(setLoadingState(true));
      const email = `${values.nim}@yourdomain.com`;
      const userCredential = await firebaseSignInWithEmail(email, values.password, dispatch);
  
      if (userCredential && userCredential.user) {
        const { user } = userCredential;
  
        // get user document
        const doc = await getUserDocument(user.uid);
  
        // Create a plain JS object from the firebase user.
        const extendedUser: ExtendedUser = {
          ...user,
          doc: doc,
        };
  
        // Convert to SerializableUser before dispatching.
        const serializableUser = convertUserToSerializableUser(extendedUser, 'nimandpassword');
        dispatch(setUser(serializableUser));
        router.push('/homepage');
      } else {
        // Display an error message for incorrect login credentials
        setErrorMessage('Invalid NIM or password.');
        setSubmitting(false);
      }
    } catch (error) {
      // Display an error message for any other errors that might occur during login
      setErrorMessage('An error occurred during login.');
      setSubmitting(false);
    } finally {
      dispatch(setLoadingState(false)); // Set loading state to false after the login process is complete.
    }
  };
  
  
  

  // Handle sign in with Google
  const handleGoogleSignIn = async () => {
    try {
      dispatch(setLoadingState(true));
      const firebaseUser = await signInWithGoogle(dispatch);
  
      if (firebaseUser) {
        const doc: UserDocument = { uid: firebaseUser.uid, name: '', nim: '', email: firebaseUser.email || '' };
        const extendedUser: ExtendedUser = {
          ...firebaseUser,
          doc: doc,
        };

        // Convert to SerializableUser before dispatching.
        const serializableUser = convertUserToSerializableUser(extendedUser, 'google');
        dispatch(setUser(serializableUser));
        router.push('/homepage');
      } else {
        throw new Error('Google sign in failed');
      }
    } catch (error) {
      setErrorMessage('Google sign in failed.');
    }
  };

  return (
    <div className='border-2 p-4 rounded items-center'>
      <h1 className='mb-4'>NIM</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className='mb-2'>
            <Field className="border-2 p-1 w-full" type="text" name="nim" />
            <div className="text-red-500 text-sm mt-1">
              <ErrorMessage name="nim" />
            </div>
          </div>
            
          <div className='mb-2'>
            <h1 className='mb-4'>Password</h1>
            <Field className="border-2 p-1 w-full" type="password" name="password" />
            <div className="text-red-500 text-sm mt-1">
              <ErrorMessage name="password" />
            </div>

            {errorMessage && (
              <div className='text-red-500 text-sm mt-2'>{errorMessage}</div>
            )}

            <button className="border-2 p-2 mt-4 bg-[#00726B] text-white w-full rounded-[7px]" type="submit">Sign-in</button>
          </div>
        </Form>
      </Formik>

      <button className="border-2 p-2 mt-4 bg-[#3391F3] text-white w-full rounded-[7px] flex items-center justify-center" onClick={handleGoogleSignIn}>
        <Image className="flex flex-col pr-2 mr-2" src={googleicon4} alt="google" width={40} height={40} />
        Sign-in with Google
      </button>
    </div>
  );
};

export default LoginForm;






