import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardActions
} from '../../components/card';
// eslint-disable-next-line
import { IQuestion } from '../question-type';
import { Button } from '../../components/button';

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
            {selectedQuestion ? selectedQuestion.description : 'non selected'}
          </CardTitle>
        </CardHeader>
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
