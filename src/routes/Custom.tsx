import { Busy } from "@/components/Busy";
import { Roles } from "@/constants";
import { AuthContext } from "@/context/Auth";
import { DefaultLayout } from "@/layout/DefaultLayout";
import { Auth } from "@/pages/auth/Auth";
import { Forbidden } from "@/pages/error/Forbidden";
import { NotFound } from "@/pages/error/NotFound";
import { AUTH_ROUTES, ROUTES } from "@/pages/routes";
import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

export const IndexRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === undefined) {
    return <Busy isCentered />;
  }

  if (!isAuthenticated) {
    return <Navigate to={AUTH_ROUTES.login} replace />;
  }

  return <Navigate to={ROUTES.home} replace />;
};

export const AuthRoute = ({
  children
}: {
  children: ReactNode | ReactNode[];
}) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === undefined) {
    return <Busy isCentered />;
  }

  if (!isAuthenticated) {
    return <Navigate to={AUTH_ROUTES.login} replace />;
  }

  return children;
};

export const AuthRedirect = () => {
  const { isAuthenticated } = useContext(AuthContext);

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
  const { isAuthenticated, user } = useContext(AuthContext);

  if (isAuthenticated === undefined) {
    return <Busy isCentered />;
  }

  if (!isAuthenticated) {
    return <Navigate to={AUTH_ROUTES.login} replace />;
  }

  if (!user?.roles.includes(Roles.Admin)) {
    return <Forbidden />;
  }

  return children;
};
