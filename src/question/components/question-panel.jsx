import React, { useState } from 'react';
import { useQuestions } from '../question-service';
import { QuestionList } from './question-list';
import { QuestionForm } from './question-form';

/**
 * @param {Object} props
 * @param {string} props.quizId
 */
export const QuestionPanel = ({ quizId }) => {
  const questions = useQuestions(quizId);
  const [selectedQuestion, selectQuestion] = useState();

  return (
    <div className="grid-300">
      <QuestionList questions={questions} onSelect={selectQuestion} />
      <QuestionForm
        selectedQuestion={selectedQuestion}
        unselect={() => selectQuestion()}
      />
    </div>
  );
};
