export interface UserLoginType {
  access_token: string;
  id: number | string;
  name: string;
  username: string;
  email: string;
  admin: boolean;
}

export interface UserType {
  username: string;
  email: string;
  admin: boolean;
}