import React, { useState } from 'react';
import { AntiAuthGuard } from '../auth';
import { Login } from '../auth/login';
import { Appbar } from '../components/appbar';
import { Button, ButtonContainer } from '../components/button';

export const Home = () => {
  const [showLogin, setShow] = useState(false);

  return (
    <AntiAuthGuard>
      {showLogin ? <Login /> : <HomeContent login={setShow} />}
    </AntiAuthGuard>
  );
};

const HomeContent = ({ login }) => (
  <div>
    <Appbar title="Real Quiz" hideAuth />
    <main className="main-content">
      <header>
        <h1>Real Quiz</h1>
        <h2>Real time quiz for classroom/presentation.</h2>
      </header>
      <ButtonContainer align="right">
        <Button onClick={login} color="primary" raised>
          Login
        </Button>
      </ButtonContainer>
    </main>
  </div>
);
