import React from 'react';
import { AuthGuard } from '../auth';
import { Appbar } from '../components/appbar';
import { QuizPanel } from '../quiz';

export const Landing = () => {
  return (
    <AuthGuard>
      <div>
        <Appbar title="Real Quiz" />
        <main className="main-content">
          <QuizPanel />
        </main>
      </div>
    </AuthGuard>
  );
};
