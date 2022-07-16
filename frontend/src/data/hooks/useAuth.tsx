import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

export function useAuth() {
  const [ status, setStatus ] = useState<
    "loading" | "unauthenticated" | "authenticated"
  >("loading");
  const { refreshToken } = useAuthContext();

  useEffect(() => {
    refreshToken().then(response => {
      if (response) {
        setStatus("authenticated")
      } else {
        setStatus("unauthenticated");
      }
    })
  },[])

  return {
    status
  };
}
