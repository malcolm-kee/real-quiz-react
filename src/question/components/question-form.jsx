import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardActions,
  CardContent
} from '../../components/card';
// eslint-disable-next-line
import { IQuestion } from '../question-type';
import { Button } from '../../components/button';
import { Field, Label, Input } from '../../components/control';

/**
 * @param {Object} props
 * @param {IQuestion} props.selectedQuestion
 * @param {() => void} props.unselect
 */
export const QuestionForm = ({ selectedQuestion, unselect }) => {
  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>
            {selectedQuestion
              ? selectedQuestion.description
              : 'Create Question'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Field>
            <Label>Question Description</Label>
            <Input id="question-description" />
          </Field>
          <Button type="button" raised>
            Add Option
          </Button>
        </CardContent>
        <CardActions>
          <Button type="button" color="primary" raised>
            Save
          </Button>
          <Button onClick={unselect} type="button">
            Cancel
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
