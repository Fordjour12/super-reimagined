# super-reeimagined

> must read:
---

- <https://blog.logrocket.com/integrating-firebase-authentication-expo-mobile-app/>

- <https://www.freecodecamp.org/news/react-native-firebase-tutorial/>

```` Javascript:
import React, { createContext } from 'react';
export const AuthContext = createContext(null);


---
import React, { useState } from 'react';
import { firebase } from 'firebase';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  firebase.auth().onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


---

import React from 'react';
import AuthProvider from './AuthProvider';
import App from './App';

const AppWithAuth = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWithAuth;

````
