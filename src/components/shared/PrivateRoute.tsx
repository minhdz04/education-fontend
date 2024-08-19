import React from "react";
import { useSelector } from "react-redux"; // or use a custom hook to get auth state
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store";

interface PrivateRouteProps {
  element: React.ReactElement;
  auth?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, auth }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  ); // replace with your auth state logic
  return isAuthenticated || !auth ? element : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
