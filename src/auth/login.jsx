import { Link } from '@reach/router';
import React from 'react';
import { Appbar } from '../components/appbar';
import { Button, ButtonContainer } from '../components/button';
import { loginWithFacebook, loginWithGoogle } from './auth-service';

export const Login = () => {
  return (
    <div>
      <Appbar title={<Link to="/">Real Quiz</Link>} hideAuth />
      <main className="main-content center">
        <ButtonContainer>
          <Button onClick={loginWithGoogle} color="secondary" raised>
            Login with Google
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={loginWithFacebook} color="primary" raised>
            Login with Facebook
          </Button>
        </ButtonContainer>
      </main>
    </div>
  );
};
