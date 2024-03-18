import { AuthResponse } from "@/types";
import { request } from "./request";

export async function register(formData: { email: string; password: string }) {
  return await request<AuthResponse>("register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
    identity: true,
  });
}

export async function login(formData: { email: string; password: string }) {
  return await request<AuthResponse>("login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
    identity: true,
  });
}
