import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../api/user";
import { ReactNode, useEffect, useState } from "react";

export const AuthRoute = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getUser();
      const authenticated = user.name !== "error";
      setIsAuthenticated(authenticated);
    };
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children || <Outlet />;
};
