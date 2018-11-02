import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(currentUser => setUser(currentUser)),
    []
  );

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const user = useContext(AuthContext);
  return user;
};
