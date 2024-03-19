import { getUser } from "@/api/user";
import { useCallback, useEffect, useState } from "react";

export const useAuthentication = (): boolean | undefined => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);

  const authenticate = useCallback(async () => {
    try {
      const response = await getUser();
      setIsLoggedIn(response.status === 200);
    } catch (error) {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    authenticate();
  }, [authenticate]);

  return isLoggedIn;
};
