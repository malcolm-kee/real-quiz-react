import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useAuthUser } from '../../auth';
import { Button } from '../../components/button';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardTitle
} from '../../components/card';
import { useAjax } from '../../components/component-util';
import { Field, Input, Label } from '../../components/control';
import { addQuiz, updateQuiz } from '../quiz-service';

export const QuizForm = ({ selectedQuiz, unselect }) => {
  const [quiz, setQuiz] = useState(DEFAULT_QUIZ);
  const user = useAuthUser();
  const titleInput = useRef(null);
  const { callAjax, isLoading } = useAjax(
    quiz.id ? updateQuiz : addQuiz,
    quiz,
    user
  );

  useEffect(
    () => {
      if (selectedQuiz) {
        setQuiz(selectedQuiz);
        titleInput.current.focus();
      } else {
        setQuiz(DEFAULT_QUIZ);
      }
    },
    [selectedQuiz]
  );

  const submit = useCallback(
    ev => {
      ev.preventDefault();
      callAjax().then(() => setQuiz(DEFAULT_QUIZ));
    },
    [quiz]
  );

  return (
    <form onSubmit={submit}>
      <Card>
        <CardHeader>
          <CardTitle>{quiz.id ? 'Edit Quiz' : 'Create Quiz'}</CardTitle>
        </CardHeader>
        <CardContent>
          <Field>
            <Label>Title</Label>
            <Input
              type="text"
              value={quiz.title}
              id="quiz-title"
              ref={titleInput}
              onChangeValue={title => setQuiz(quiz => ({ ...quiz, title }))}
              disabled={isLoading}
              required
            />
          </Field>
        </CardContent>
        <CardActions>
          <Button type="submit" color="primary" disabled={isLoading} raised>
            Save
          </Button>
          <Button
            onClick={unselect}
            type="button"
            disabled={isLoading || quiz === DEFAULT_QUIZ}
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

const DEFAULT_QUIZ = {
  title: ''
};
