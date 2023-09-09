// components/RegisterForm.tsx

import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerWithEmail, loginAndCreateSession } from '../lib/firebaseClient';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
  });

  const router = useRouter();  // New line: Initialise the useRouter hook

  const onSubmit = async (values: any) => {
    const { status, user } = await registerWithEmail(values.email, values.password, values.name); // Destructure status and user from returned object

    // If registration is successful, redirect to homepage
    if (status === 'success') {
      // Login upon successful registration
      const loginStatus = await loginAndCreateSession(values.email, values.password);
      
      if (loginStatus.status === 'success') {
        router.push('/homepage');
      } else {
        setErrorMessage('Login failed after registration.');
      }
    } else {
      // Handle registration failure
      setErrorMessage('Registration failed.');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />
          </div>

          <div>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />
          </div>

          <div>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
          </div>

          <div>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
