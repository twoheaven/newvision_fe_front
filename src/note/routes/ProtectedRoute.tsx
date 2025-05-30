import { Navigate } from "react-router-dom";

import Paths from "../../types/paths";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to={Paths.Login} />;
  return children;
};

export default ProtectedRoute;
