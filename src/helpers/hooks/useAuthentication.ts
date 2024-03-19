import { getUser } from "@/api/user";
import { UserModel } from "@/types";
import { useCallback, useEffect, useState } from "react";

export const useAuthentication = (): {
  isAuthenticated: boolean | undefined;
  roles: string[];
} => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );
  const [roles, setRoles] = useState<string[]>([]);

  const authenticate = useCallback(async () => {
    try {
      const response = await getUser();
      const user: UserModel = await response.json();
      setIsAuthenticated(response.status === 200);
      setRoles(user.roles);
    } catch (error) {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    authenticate();
  }, [authenticate]);

  return { isAuthenticated, roles };
};
