import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/home/Home";
import { IndexRoute, AuthRoute, AuthRedirect } from "@/routes/Custom";
import { NotFound } from "@/pages/error/NotFound";

export const Root = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<IndexRoute />} />
        <Route path="auth" element={<AuthRedirect />} />
      </Route>
      <Route
        path="/home"
        element={
          <AuthRoute>
            <Home />
          </AuthRoute>
        }
      />
      <Route
        path="*"
        element={
          <AuthRoute>
            <NotFound />
          </AuthRoute>
        }
      />
    </Routes>
  );
};
