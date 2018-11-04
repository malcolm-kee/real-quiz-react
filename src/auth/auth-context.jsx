import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
    isLoading: true
  });
  useEffect(() => {
    const timeout = setTimeout(
      () => setAuthState(authState => ({ ...authState, isLoading: false })),
      2000
    );
    const unsub = firebase.auth().onAuthStateChanged(user => {
      setAuthState({ user, ...(!!user ? { isLoading: false } : {}) });
      if (user) {
        clearTimeout(timeout);
      }
    });

    return () => {
      unsub();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

/**
 * @returns {firebase.User | null} the login firebase user
 */
export const useAuthUser = () => {
  const { user } = useContext(AuthContext);
  return user;
};

/**
 * @returns {boolean} the authentication is loading
 */
export const useAuthIsLoading = () => {
  const { isLoading } = useContext(AuthContext);
  return isLoading;
};

/**
 * @returns {{user: firebase.User | null, isLoading: boolean}}
 */
export const useAuth = () => {
  return useContext(AuthContext);
};
