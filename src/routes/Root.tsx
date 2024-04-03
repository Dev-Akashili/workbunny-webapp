import {
  IndexRoute,
  AuthRoute,
  AuthRedirect,
  AdminRoute
} from "@/routes/Custom";
import { NotFound } from "@/pages/error/NotFound";
import { Admin } from "@/pages/admin/Admin";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/home/Home";
import { Dashboard } from "@/pages/dashboard/Dashboard";
import { PageLayout } from "@/layout/PageLayout";
import { GetHelp } from "@/pages/help/GetHelp";

export const Root = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<IndexRoute />} />
        <Route path="auth" element={<AuthRedirect />} />
      </Route>

      <Route element={<PageLayout />}>
        <Route
          path="/home"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <Dashboard />
            </AuthRoute>
          }
        />
        <Route
          path="/help"
          element={
            <AuthRoute>
              <GetHelp />
            </AuthRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
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
      </Route>
    </Routes>
  );
};
