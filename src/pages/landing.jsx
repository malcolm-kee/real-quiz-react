import React from 'react';
import { AuthGuard, logout, useAuthUser } from '../auth';
import { Appbar } from '../components/appbar';

export const Landing = () => {
  const user = useAuthUser();

  return (
    <AuthGuard>
      <div>
        <Appbar title="Real Quiz" />
        <h1>landing</h1>
        {user && user.displayName}
        <button onClick={logout}>Logout</button>
      </div>
    </AuthGuard>
  );
};
