import { MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../../atoms/authScreenAtom";

const { Title, Text } = Typography;

const ResetPassForm = () => {
  const setAuthScreenState = useSetRecoilState(authScreenAtom);
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center min-w-96">
        <MailOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />
        <Title level={2} className="mt-4">
          Set new password
        </Title>
        <Text>Must be at least 8 characters.</Text>
        <Form layout="vertical" className="mt-4">
          <div className="mb-4">
            <Input.Password
              placeholder="Password"
              className="w-full h-12 text-lg border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <Input.Password
              placeholder="Confirm password"
              className="w-full h-12 text-lg border-gray-300 rounded-lg"
            />
          </div>
          <Button
            type="primary"
            size="large"
            // onClick={handleContinue}
            className="w-full "
            onClick={() => setAuthScreenState("reset-success")}
          >
            Continue
          </Button>
          <div className="mt-4">
            <Text>
              Didn’t receive the email? <a href="#">Click to resend</a>
            </Text>
          </div>
          <div className="mt-4">
            <a href="#" onClick={() => setAuthScreenState("login")}>
              <Text type="secondary">Back to log in</Text>
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassForm;
