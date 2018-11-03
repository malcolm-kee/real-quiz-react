import React from 'react';
import { AuthGuard } from '../auth';
import { Appbar } from '../components/appbar';
import { QuizList } from '../quiz';

export const Landing = () => {
  return (
    <AuthGuard>
      <div>
        <Appbar title="Real Quiz" />
        <main className="main-content">
          <QuizList />
        </main>
      </div>
    </AuthGuard>
  );
};
