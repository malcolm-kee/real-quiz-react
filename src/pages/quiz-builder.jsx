import { Link } from '@reach/router';
import React from 'react';
import { AuthGuard } from '../auth';
import { Appbar } from '../components/appbar';
import { QuestionPanel } from '../question';

export const QuizBuilder = ({ quizId }) => {
  return (
    <AuthGuard>
      <Appbar title={<Link to="/">Real Quiz</Link>} />
      <QuestionPanel quizId={quizId} />
    </AuthGuard>
  );
};
