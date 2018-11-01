import { useEffect, useState } from 'react';
import firebase from 'firebase/app';

/**
 * @returns {firebase.User}
 */
export const useAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(currentUser => setUser(currentUser)),
    []
  );
  return user;
};

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const loginWithGoogle = () =>
  firebase.auth().signInWithPopup(googleProvider);

export const signout = () => firebase.auth().signOut();
