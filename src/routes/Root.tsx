import { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Auth } from "../pages/auth/Auth";
import { Home } from "../pages/home/Home";
import { AuthRoute } from "../layout/AuthRoute";
import { Busy } from "../components/Busy";
import { NotFound } from "../pages/error/NotFound";

const IndexRedirect = () => {
  const user: boolean = true;
  const navigate = useNavigate();
  useEffect(() => {
    const path = user ? "/auth" : "/home";
    navigate(path, { replace: true });
  }, [user, navigate]);
  return null;
};

export const Root = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<IndexRedirect />} />
        <Route path="auth" element={<Auth />} />
      </Route>
      <Route
        path="/home"
        element={
          <Suspense fallback={<Busy />}>
            <AuthRoute>
              <Home />
            </AuthRoute>
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
