export interface RequestError {
  id: string;
  name: string;
  message: string;
}

export interface UserModel extends RequestError {
  email: string;
}

export interface AuthResponse {
  status: number;
  title: string;
}

export interface APIResult {
  name: "info" | "warning" | "success" | "error" | "loading" | undefined;
  message: string;
}
