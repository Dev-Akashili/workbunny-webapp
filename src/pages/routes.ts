const basePath = "";

export const ROUTES = {
  home: `${basePath}/home`,
  dashboard: `${basePath}/dashboard`,
  admin: `${basePath}/admin`,
  help: `${basePath}/help`,
  analytics: `${basePath}/analytics`,
  messages: `${basePath}/messages`
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
