import { Redirect } from '@reach/router';
import React from 'react';
import { useAuthUser } from '../auth';
import { Login } from '../auth/login';

export const LoginPage = () => {
  const user = useAuthUser();

  return !!user ? <Redirect to="/landing" noThrow /> : <Login />;
};
