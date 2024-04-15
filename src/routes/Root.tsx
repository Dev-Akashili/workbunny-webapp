import {
  IndexRoute,
  AuthRoute,
  AuthRedirect,
  AdminRoute,
} from "@/routes/Custom";
import { NotFound } from "@/pages/error/NotFound";
import { Admin } from "@/pages/admin/Admin";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/home/Home";
import { Dashboard } from "@/pages/dashboard/Dashboard";
import { PageLayout } from "@/layout/PageLayout";
import { GetHelp } from "@/pages/help/GetHelp";
import { ROUTES } from "@/pages/routes";
import { Analytics } from "@/pages/analytics/Analytics";
import { Activity } from "@/pages/activity/Activity";
import { CreateJobShare } from "@/pages/dashboard/pages/jobShare";

export const Root = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<IndexRoute />} />
        <Route path="auth" element={<AuthRedirect />} />
      </Route>

      <Route element={<PageLayout />}>
        <Route
          path={ROUTES.home}
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route path={ROUTES.dashboard.base}>
          <Route
            index
            element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            }
          />
          <Route
            path="create"
            element={
              <AuthRoute>
                <CreateJobShare />
              </AuthRoute>
            }
          />
        </Route>
        <Route
          path={ROUTES.help}
          element={
            <AuthRoute>
              <GetHelp />
            </AuthRoute>
          }
        />
        <Route
          path={ROUTES.analytics}
          element={
            <AuthRoute>
              <Analytics />
            </AuthRoute>
          }
        />
        <Route
          path={ROUTES.activity}
          element={
            <AuthRoute>
              <Activity />
            </AuthRoute>
          }
        />
        <Route
          path={ROUTES.admin}
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
