import { Busy } from "@/components/Busy";
import { useAuthentication } from "@/helpers/hooks/useAuthentication";
import { Auth } from "@/pages/auth/Auth";
import { NotFound } from "@/pages/error/NotFound";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const IndexRoute = () => {
  const { pathname } = useLocation();
  const isLoggedIn = useAuthentication();

  if (isLoggedIn === undefined) {
    return <Busy />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/auth?page=login" replace />;
  }

  return <Navigate to={pathname} replace />;
};

export const AuthRoute = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const isLoggedIn = useAuthentication();

  if (isLoggedIn === undefined) {
    return <Busy />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/auth?page=login" replace />;
  }

  return children;
};

export const AuthRedirect = () => {
  const isLoggedIn = useAuthentication();

  if (isLoggedIn === undefined) {
    return <Busy />;
  }

  if (!isLoggedIn) {
    return <Auth />;
  }

  return <NotFound />;
};
