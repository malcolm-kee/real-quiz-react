import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../../components/card';
import { List, ListItem, ListItemText } from '../../components/list';
// eslint-disable-next-line
import { IQuestion } from '../question-type';

/**
 *
 * @param {Object} props
 * @param {IQuestion[]} props.questions
 * @param {(question: IQuestion) => void} props.onSelect
 */
export const QuestionList = ({ questions, onSelect }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <List>
          {questions.map(q => (
            <ListItem onClick={() => onSelect(q)} isButton key={q.id}>
              <ListItemText primary={q.description} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
