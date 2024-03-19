import { UserModel } from "@/types";
import { request } from "./request";

const fetchKeys = { getUser: "user" };

export async function getUser(): Promise<Response> {
  return await request<UserModel>(fetchKeys.getUser);
}
