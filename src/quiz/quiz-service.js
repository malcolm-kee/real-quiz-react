import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
// eslint-disable-next-line
import { IQuiz } from './quiz-type';
import { useAuthUser } from '../auth';
import { getQuestions, removeQuestion } from '../question/question-service';

/**
 * @returns {IQuiz[]} list of quizzes created by user
 */
export const useQuizzes = () => {
  const user = useAuthUser();
  const [quizzes, setQuizzes] = useState([]);
  useEffect(
    () =>
      getQuizCollection()
        .where('createdByUid', '==', user.uid)
        .onSnapshot(snapshot => {
          setQuizzes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }),
    []
  );

  return quizzes;
};

/**
 *
 * @param {IQuiz} quiz
 */
export const addQuiz = (quiz, user) => {
  return getQuizCollection().add({
    createdByUid: user.uid,
    createdByName: user.displayName,
    ...quiz
  });
};

/**
 *
 * @param {IQuiz} quiz
 */
export const updateQuiz = quiz => {
  const { id, createdByName, createdByUid, ...data } = quiz;
  return getQuizCollection()
    .doc(id)
    .update(data);
};

/**
 * @param {string} quizId
 */
export const removeQuiz = quizId =>
  getQuestions(quizId).then(questions =>
    Promise.all(
      [
        getQuizCollection()
          .doc(quizId)
          .delete()
      ].concat(questions.map(q => removeQuestion(quizId, q.id)))
    )
  );

const getQuizCollection = () => firebase.firestore().collection('quizzes');
