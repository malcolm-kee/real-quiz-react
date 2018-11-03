import React from 'react';
import { useQuizzes } from '../quiz-service';

export const QuizList = () => {
  const quizzes = useQuizzes();

  return (
    <div>
      <h1>Quizzes</h1>
      {quizzes.map(quiz => (
        <div key={quiz.id}>{quiz.title}</div>
      ))}
    </div>
  );
};
