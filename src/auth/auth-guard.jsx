import React from 'react';
import { useAuth } from './auth-context';
import { Login } from './login';

export const AuthGuard = ({ children }) => {
  const user = useAuth();

  return user ? children : <Login />;
};
