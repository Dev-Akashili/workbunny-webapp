export interface RequestError {
  id: string;
  name: string;
  message: string;
}

export interface UserModel extends RequestError {
  email: string;
}
