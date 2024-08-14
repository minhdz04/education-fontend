import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Outlet />
    </div>
  );
};

export default AuthPage;
