import React, { useState } from 'react';
import { useQuizzes } from '../quiz-service';
import { QuizList } from './quiz-list';
import { QuizForm } from './quiz-form';

export const QuizPanel = () => {
  const quizzes = useQuizzes();
  const [selectedQuiz, selectQuiz] = useState();

  return (
    <div className="grid-300">
      <QuizList quizzes={quizzes} onSelect={selectQuiz} />
      <QuizForm selectedQuiz={selectedQuiz} unselect={() => selectQuiz()} />
    </div>
  );
};
