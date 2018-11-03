import { Redirect } from '@reach/router';
import React from 'react';
import { useAuth } from './auth-context';
import { Login } from './login';
import { LoadingPage } from './loading-page';

/**
 * AuthGuard renders children if authenticated, else renders Login
 */
export const AuthGuard = ({ children }) => {
  const { user, isLoading } = useAuth();

  return user ? children : isLoading ? <LoadingPage /> : <Login />;
};

/**
 * AntiAuthGuard renders children if NOT authenticated, else redirect to "/landing"
 */
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
