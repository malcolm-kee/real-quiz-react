import firebase from 'firebase/app';

export const loginWithGoogle = () =>
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

export const loginWithFacebook = () =>
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());

export const logout = () => firebase.auth().signOut();
