import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FirebaseAuth, Firebase_db } from "../../firebase.conf";
import { CreateAuthContext } from "../authContext/createAuth.context";

const AuthenticationProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const auth = FirebaseAuth;
  const db = Firebase_db;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // setLoading(true);
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user);

      if (response.user == null) {
        alert("User does not exit ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response.user);

      // if (response.user.emailVerified === false) {
      //   sendEmailVerification(response.user);
      // }
      const data = await setDoc(doc(db, "users", response.user.uid), {
        data: JSON.stringify(response.user),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    const response = signOut(auth);
    console.log("user logged out");
  };

  const value = {
    currentUser,
    onLogin: login,
    onRegister: register,
    onLogout: logout,
  };

  return (
    <CreateAuthContext.Provider value={value}>
      {children}
    </CreateAuthContext.Provider>
  );
};

export { AuthenticationProvider };
