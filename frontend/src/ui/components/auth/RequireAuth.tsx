import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../../data/hooks/useAuth";
import { useAuthContext } from "../../../data/hooks/useAuthContext";
import { Preloader } from "../Preloader";

export function RequireAuth() {
  const { user } = useAuthContext();
  const { status } = useAuth();
  const location = useLocation();

  if (status === "loading") {
    return <Preloader />;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
