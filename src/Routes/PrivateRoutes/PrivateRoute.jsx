import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <span className="loading loading-spinner loading-md"></span>;
  }

  if (!user) {
    navigate("/login");
  }
  else{
    navigate("/admin")
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;