import React from 'react';
import { Button, LinkButton } from '../../components/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../../components/card';
import { MatIcon } from '../../components/icon';
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '../../components/list';
import { useAjax } from '../../components/component-util';
import { removeQuiz } from '../quiz-service';
// eslint-disable-next-line
import { IQuiz } from '../quiz-type';

/**
 *
 * @param {Object} props
 * @param {IQuiz[]} props.quizzes
 * @param {() => void} props.onSelect
 */
export const QuizList = ({ quizzes, onSelect }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quizzes</CardTitle>
      </CardHeader>
      <CardContent>
        <List>
          {quizzes.map(quiz => (
            <QuizItem
              quiz={quiz}
              onClick={() => onSelect(quiz)}
              key={quiz.id}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

/**
 * @param {Object} props
 * @param {IQuiz} props.quiz
 * @param {() => void} props.onClick
 */
const QuizItem = ({ quiz, onClick }) => {
  const { callAjax, isLoading } = useAjax(removeQuiz, quiz.id);

  return (
    <ListItem onClick={onClick} disabled={isLoading} isButton>
      <ListItemText primary={quiz.title} />
      <ListItemSecondaryAction>
        <LinkButton to={`/quiz-builder/${quiz.id}`} icon>
          <MatIcon iconName="build" />
        </LinkButton>
      </ListItemSecondaryAction>
      <ListItemSecondaryAction>
        <Button onClick={callAjax} disabled={isLoading} icon>
          <MatIcon iconName="delete" />
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
