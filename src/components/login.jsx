import React from 'react';
import { useAuth, loginWithGoogle, signout } from '../services/auth-service';
import { Appbar } from './appbar/appbar';

export const Login = () => {
  const user = useAuth();

  return (
    <div>
      <Appbar title="Real Quiz" />
      <pre>{user && JSON.stringify(user, null, 2)}</pre>
      <button onClick={loginWithGoogle}>Login with Google</button>
      <button>Login with Facebook</button>
      <button onClick={signout}>Logout</button>
    </div>
  );
};
