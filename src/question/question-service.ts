import firebase from 'firebase/app';
import { IQuestion } from './question-type';

export const getQuestions = (quizId: string) =>
  new Promise<IQuestion[]>(fulfill => {
    getQuestionCollection(quizId).onSnapshot(snapshot =>
      fulfill(
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as IQuestion)
        }))
      )
    );
  });

export const removeQuestion = (quizId: string, questionId: string) =>
  getQuestionCollection(quizId)
    .doc(questionId)
    .delete();

const getQuestionCollection = (quizId: string) =>
  firebase
    .firestore()
    .collection('quizzes')
    .doc(quizId)
    .collection('questions');
