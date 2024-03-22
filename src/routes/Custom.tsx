import { Busy } from "@/components/Busy";
import { useAuthentication } from "@/helpers/hooks/useAuthentication";
import { Auth } from "@/pages/auth/Auth";
import { Forbidden } from "@/pages/error/Forbidden";
import { NotFound } from "@/pages/error/NotFound";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const IndexRoute = () => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuthentication();

  if (isAuthenticated === undefined) {
    return <Busy isCentered />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth?page=login" replace />;
  }

  return <Navigate to={pathname} replace />;
};

export const AuthRoute = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const { isAuthenticated } = useAuthentication();

  if (isAuthenticated === undefined) {
    return <Busy isCentered />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth?page=login" replace />;
  }

  return children;
};

export const AuthRedirect = () => {
  const { isAuthenticated } = useAuthentication();

  if (isAuthenticated === undefined) {
    return <Busy isCentered />;
  }

  if (!isAuthenticated) {
    return <Auth />;
  }

  return <NotFound />;
};

export const AdminRoute = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const { isAuthenticated, user } = useAuthentication();

  if (isAuthenticated === undefined) {
    return <Busy isCentered />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth?page=login" replace />;
  }

  if (!user?.roles.includes("Admin")) {
    return <Forbidden />;
  }

  return children;
};
