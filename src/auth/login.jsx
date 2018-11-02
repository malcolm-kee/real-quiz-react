import React from 'react';
import { loginWithGoogle, logout } from './auth-service';
import { useAuth } from './auth-context';
import { Appbar } from '../components/appbar';

export const Login = () => {
  const user = useAuth();

  return (
    <div>
      <Appbar title="Real Quiz" />
      {user ? (
        <React.Fragment>
          {user.displayName}
          <button onClick={logout}>Logout</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <button onClick={loginWithGoogle}>Login with Google</button>
          <button>Login with Facebook</button>
        </React.Fragment>
      )}
    </div>
  );
};
