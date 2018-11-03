import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../../components/card';
import { List, ListItem } from '../../components/list';

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
              {quiz.title}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
