import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100">
      <Outlet />
    </div>
  );
};

export default AuthPage;
