import React, { useCallback, useState, useEffect, useRef } from 'react';
import { addQuiz, updateQuiz } from '../quiz-service';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardActions
} from '../../components/card';
import { Button } from '../../components/button';
import { Field, Input, Label } from '../../components/control';
import { useAuthUser } from '../../auth';

export const QuizForm = ({ selectedQuiz, unselect }) => {
  const [quiz, setQuiz] = useState(DEFAULT_QUIZ);
  const [isLoading, setIsLoading] = useState(false);
  const user = useAuthUser();
  const titleInput = useRef(null);

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
      setIsLoading(true);
      ev.preventDefault();
      const ajax = quiz.id ? updateQuiz : addQuiz;
      ajax(quiz, user)
        .then(() => {
          setQuiz(DEFAULT_QUIZ);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
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
          <Button type="submit" color="primary" disabled={isLoading}>
            Save
          </Button>
          <Button onClick={unselect} type="button" disabled={isLoading}>
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
