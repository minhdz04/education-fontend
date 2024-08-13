import { Button } from "antd";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../../atoms/authScreenAtom";
import { CheckCircleOutlined } from "@ant-design/icons";

const ResetSuccess = () => {
  const setAuthScreenState = useSetRecoilState(authScreenAtom);
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg min-w-96">
      <div className="text-center mb-6">
        <CheckCircleOutlined style={{ fontSize: '50px', color: '#2863fa' }} className="m-2"/>
        <h1 className="text-2xl font-semibold">All done!</h1>
        <p className="text-gray-500">Your password has been reset.</p>
      </div>
      <Button
        onClick={() => {
          setAuthScreenState("login");
        }}
        type="primary"
        block
        className="h-12 text-lg mb-4"
      >
        Back to login
      </Button>
    </div>
  );
};

export default ResetSuccess;
