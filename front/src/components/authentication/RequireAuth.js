import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";

const RequireAuth = ({ allowedRoles = "" }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
