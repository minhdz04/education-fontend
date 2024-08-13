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
    </div>
  );
};

export default AuthPage;
