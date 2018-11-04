import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
// eslint-disable-next-line
import { IQuestion } from './question-type';

/**
 * Get all always updated list of questions for a quiz
 * @param {string} quizId id of the quiz
 * @returns {IQuestion[]} questions for the quiz
 */
export const useQuestions = quizId => {
  const [questions, setQuestions] = useState([]);
  useEffect(
    () =>
      getQuestionCollection(quizId).onSnapshot(snapshot =>
        setQuestions(
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        )
      ),
    []
  );

  return questions;
};

/**
 * Get list of questions under a quiz
 * @param {string} quizId id of the quiz
 * @return {Promise<IQuestion[]>} list of questions
 */
export const getQuestions = quizId =>
  new Promise(fulfill => {
    const unsub = getQuestionCollection(quizId).onSnapshot(snapshot => {
      fulfill(
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      );
      unsub();
    });
  });

/**
 * Remove question
 * @param {string} quizId
 * @param {string} questionId
 */
export const removeQuestion = (quizId, questionId) =>
  getQuestionCollection(quizId)
    .doc(questionId)
    .delete();

/**
 *
 * @param {string} quizId
 */
const getQuestionCollection = quizId =>
  firebase
    .firestore()
    .collection('quizzes')
    .doc(quizId)
    .collection('questions');
