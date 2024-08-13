<<<<<<< HEAD
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100">
      <Outlet />
=======
import { useRecoilValue } from "recoil";
import LoginForm from "../../components/auth/LoginForm";
import authScreenAtom from "../../atoms/authScreenAtom";
import SignupForm from "../../components/auth/SignupForm";
import ForgotForm from "../../components/auth/ForgotForm";
import VerifyForm from "../../components/auth/VerifyForm";
import ResetPassForm from "../../components/auth/ResetPassForm";
import ResetSuccess from "../../components/auth/ResetSuccess";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);

  const renderAuthForm = () => {
    switch (authScreenState) {
      case "login":
        return <LoginForm />;
      case "signup":
        return <SignupForm />;
      case "forgotPass":
        return <ForgotForm />;
      case "verify":
        return <VerifyForm />;
      case "reset":
        return <ResetPassForm />;
      case "reset-success":
        return <ResetSuccess />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {renderAuthForm()}
>>>>>>> c87f549 (init project)
    </div>
  );
};

export default AuthPage;
