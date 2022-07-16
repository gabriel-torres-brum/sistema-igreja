import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserLoginType } from "../@types/User";
import { refreshTokenRequest, signInRequest } from "../services/auth";

interface AuthContextData {
  user?: UserLoginType;
  signIn: (data: SignInData) => Promise<void>;
  refreshToken: () => Promise<UserLoginType | undefined>;
}

interface SignInData {
  username: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserLoginType>();
  const navigate = useNavigate();

  async function signIn(data: SignInData) {
    const user = await signInRequest(data);
    if (user) {
      localStorage.access_token = user.access_token;
      setUser(user);
      navigate("/dashboard");
    }
    toast.error("Erro ao fazer login.")
  }

  async function refreshToken() {
    const user = await refreshTokenRequest();
    if (user) {
      localStorage.access_token = user.access_token;
      setUser(user);
    }
    return user;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        refreshToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
