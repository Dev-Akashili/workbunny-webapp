import { Busy } from "@/components/Busy";
import { Roles } from "@/constants";
import { useAuthentication } from "@/helpers/hooks/useAuthentication";
import { DefaultLayout } from "@/layout/DefaultLayout";
import { Auth } from "@/pages/auth/Auth";
import { Forbidden } from "@/pages/error/Forbidden";
import { NotFound } from "@/pages/error/NotFound";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const IndexRoute = () => {
  const { isAuthenticated } = useAuthentication();

  if (isAuthenticated === undefined) {
    return <Busy isCentered />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth?page=login" replace />;
  }

  return <Navigate to="/home" replace />;
};

export const AuthRoute = ({
  children
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
    return (
      <DefaultLayout>
        <Busy />
      </DefaultLayout>
    );
  }

  if (!isAuthenticated) {
    return <Auth />;
  }

  return <NotFound />;
};

export const AdminRoute = ({
  children
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

  if (!user?.roles.includes(Roles.Admin)) {
    return <Forbidden />;
  }

  return children;
};
