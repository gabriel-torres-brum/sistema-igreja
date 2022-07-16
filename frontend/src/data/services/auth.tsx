import { api } from "./api";
import { UserLoginType } from "../@types/User";

interface SignInRequest {
  username: string;
  password: string;
}

export async function signInRequest({ username, password }: SignInRequest) {
  try {
    const { data } = await api.post("/auth/login", { username, password });
    return data as UserLoginType;
  } catch (err) {
    return undefined;
  }
}

export async function refreshTokenRequest() {
  try {
    const { data } = await api.post("/auth/refresh");
    return data as UserLoginType;
  } catch (err) {
    return undefined;
  }
}
