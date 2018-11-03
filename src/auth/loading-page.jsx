import React from 'react';
import { Appbar } from '../components/appbar';
import { LoadingIcon } from '../components/icon';

export const LoadingPage = () => (
  <div>
    <Appbar title="Real Quiz" />
    <main style={{ textAlign: 'center' }}>
      <LoadingIcon />
      <h1>Authenticating...</h1>
    </main>
  </div>
);
