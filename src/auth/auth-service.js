import firebase from 'firebase/app';

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const loginWithGoogle = () =>
  firebase.auth().signInWithPopup(googleProvider);

export const logout = () => firebase.auth().signOut();
