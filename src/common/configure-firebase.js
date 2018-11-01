import fbase from 'firebase/app';
import 'firebase/auth';

export const configureFirebase = () =>
  fbase.initializeApp({
    apiKey: 'AIzaSyBZBbhNxJdE60t3Rofgiv78eedDVfn2Oss',
    authDomain: 'real-quiz-app.firebaseapp.com',
    databaseURL: 'https://real-quiz-app.firebaseio.com',
    projectId: 'real-quiz-app',
    storageBucket: 'real-quiz-app.appspot.com',
    messagingSenderId: '141283978488'
  });
