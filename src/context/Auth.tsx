import React, { ReactNode, useEffect, useState } from "react";
import { UserModel } from "@/types";
import { useAuthentication } from "@/helpers/hooks/useAuthentication";

export interface AuthContextValue {
  isAuthenticated: boolean | undefined;
  user: UserModel | null;
}

export const AuthContext = React.createContext<AuthContextValue>({
  isAuthenticated: undefined,
  user: null
});

interface ProviderProps {
  children: ReactNode | ReactNode[];
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const { isAuthenticated, user } = useAuthentication();
  const [authState, setAuthState] = useState({
    isAuthenticated,
    user
  });

  useEffect(() => {
    setAuthState({ isAuthenticated, user });
  }, [isAuthenticated, user]);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
