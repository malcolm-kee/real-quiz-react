import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../../components/card';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '../../components/list';
// eslint-disable-next-line
import { IQuiz } from '../quiz-type';
import { Button } from '../../components/button';
import { MatIcon } from '../../components/icon';

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
            <ListItem onClick={() => onSelect(quiz)} isButton key={quiz.id}>
              <ListItemText
                primary={quiz.title}
                secondary={quiz.createdByName}
              />
              <ListItemSecondaryAction>
                <Button icon>
                  <MatIcon iconName="delete" />
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
