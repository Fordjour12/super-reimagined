import { User } from "firebase/auth";
import { createContext, useContext } from "react";

interface AuthProps {
  currentUser?: User;
  onLogin?: (email: string, password: string) => Promise<any>;
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogout?: () => void;
}

export const CreateAuthContext = createContext<AuthProps>({});

export const useAuthContext = () => {
  return useContext(CreateAuthContext);
};
