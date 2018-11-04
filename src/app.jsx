import { Router } from '@reach/router';
import React from 'react';
import './app.scss';
import { AuthProvider } from './auth';
import { configureFirebase } from './common/configure-firebase';
import { Home } from './pages/home';
import { Landing } from './pages/landing';
import { LoginPage } from './pages/login';
import { QuizBuilder } from './pages/quiz-builder';

configureFirebase();

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Home path="/" />
        <Landing path="landing" />
        <QuizBuilder path="quiz-builder/:quizId" />
        <LoginPage path="login" />
      </Router>
    </AuthProvider>
  );
};

export default App;
