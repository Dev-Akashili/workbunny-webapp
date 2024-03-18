import { APIResult } from "../types";
import { request } from "./request";

const fetchKeys = {
  login: "account/login",
};

export async function login(formData: { email: string; password: string }) {
  return await request<APIResult>(fetchKeys.login, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
    identity: false,
  });
}
