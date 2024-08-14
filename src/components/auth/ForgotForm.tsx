import { ArrowLeftOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../../atoms/authScreenAtom";
import { Link } from "react-router-dom";

const { Text, Title } = Typography;
const ForgotForm = () => {
  const setAuthScreenState = useSetRecoilState(authScreenAtom);

  const onFinish = () => {
    console.log("Received values of form: ");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg min-w-96 ">
      <div className="mb-6 text-center">
        <Title level={2} className="text-2xl font-bold mb-2">
          Forgot password ?
        </Title>
        <Text className="text-gray-600">
          No worries , we'll send you a reset introductions.
        </Text>
      </div>
      <Form
        name="forgot-passord"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        layout="vertical"
        requiredMark="optional"
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="text-gray-500 mr-2" />}
            placeholder="Email"
            className="w-full h-12 text-lg border-gray-300 rounded-lg"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            onClick={() => setAuthScreenState("verify")}
          >
            Reset password
          </Button>
          <div className="mt-4 text-center">
            <Link
              to={"/auth/login"}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              <ArrowLeftOutlined /> Back to Login
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotForm;
