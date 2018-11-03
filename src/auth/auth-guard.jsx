import { Redirect } from '@reach/router';
import React from 'react';
import { useAuth } from './auth-context';
import { Login } from './login';
import { LoadingPage } from './loading-page';

export const AuthGuard = ({ children }) => {
  const { user, isLoading } = useAuth();

  return user ? children : isLoading ? <LoadingPage /> : <Login />;
};

export const AntiAuthGuard = ({ children }) => {
  const { user, isLoading } = useAuth();

  return user ? (
    <Redirect to="/landing" noThrow />
  ) : isLoading ? (
    <LoadingPage />
  ) : (
    children
  );
};
