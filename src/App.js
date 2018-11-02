import { Link, Router } from '@reach/router';
import React from 'react';
import './app.scss';
import { configureFirebase } from './common/configure-firebase';
import { Appbar } from './components/appbar';
import { AuthGuard, AuthProvider, useAuth, logout } from './auth';

configureFirebase();

const Home = () => (
  <div>
    <Appbar title="Real Quiz" />
    home
    <Link to="landing">landing</Link>
  </div>
);

const Landing = () => {
  const user = useAuth();

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

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Home path="/" />
        <Landing path="landing" />
      </Router>
    </AuthProvider>
  );
};

export default App;
