import { request } from "./request";

const fetchKeys = {
  login: "account/login",
  verifyEmail: "account/verifyEmail",
  sendEmailVerificationEmail: (email: string, name: string) =>
    `account/sendEmailVerificationLink?email=${email}&name=${name}`,
};

export async function login(formData: { email: string; password: string }) {
  return await request(fetchKeys.login, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
    identity: false,
  });
}

export async function verifyEmail(formData: {
  codeId: number;
  code: string;
  email: string;
}) {
  return await request(fetchKeys.verifyEmail, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
    identity: false,
  });
}

export async function sendEmail(email: string, name: string) {
  return await request(fetchKeys.sendEmailVerificationEmail(email, name), {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    identity: false,
  });
}
