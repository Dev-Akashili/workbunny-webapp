import { getUser } from "@/api/user";
import { UserModel } from "@/types";
import { useCallback, useEffect, useState } from "react";

export const useAuthentication = (): {
  isAuthenticated: boolean | undefined;
  user: UserModel | null;
} => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );
  const [user, setUser] = useState<UserModel | null>(null);

  const authenticate = useCallback(async () => {
    try {
      const response = await getUser();
      const user: UserModel = await response.json();
      if (response.status === 200) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    authenticate();
  }, [authenticate]);

  return { isAuthenticated, user };
};
