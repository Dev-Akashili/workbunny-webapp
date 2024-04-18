const basePath = "";
const jobSharePath = "/jobshare";

export const ROUTES = {
  home: `${basePath}/home`,
  dashboard: `${basePath}/dashboard`,
  jobshare: {
    index: `${basePath}/jobshare`,
    create: `${jobSharePath}/create`,
    edit: `${jobSharePath}/edit`
  },
  admin: `${basePath}/admin`,
  help: `${basePath}/help`,
  analytics: `${basePath}/analytics`,
  activity: `${basePath}/activity`
};

const authBasePath = "/auth";

export const AUTH_ROUTES = {
  login: `${authBasePath}?page=login`,
  register: `${authBasePath}?page=register`,
  forgotPasword: `${authBasePath}?page=forgot-password`,
  verifyEmail: {
    regiser: (email: string) =>
      `${authBasePath}?page=verify-email&name=register&email=${email}`
  }
};
