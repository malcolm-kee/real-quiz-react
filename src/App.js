import { Link, Router } from '@reach/router';
import React from 'react';
import './app.scss';
import { Login } from './components/login';
import { Appbar } from './components/appbar';

const Home = () => (
  <div>
    <Appbar title="Real Quiz" />
    home
    <Link to="landing">landing</Link>
  </div>
);
const Landing = () => (
  <div>
    <Appbar title="Real Quiz" />
    landing
    <button>Wohoo</button>
  </div>
);

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Landing path="landing" />
      <Login path="/login" />
    </Router>
  );
};

export default App;
