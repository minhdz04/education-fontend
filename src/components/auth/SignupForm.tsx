import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../../atoms/authScreenAtom";
import SocialSignInButtons from "./SocialSignInButtons";

const { Text, Title } = Typography;
interface SingUpInput {
  email: string;
  password: string;
  rePassword: string;
}

const SignupForm = () => {
  const setAuthScreenState = useSetRecoilState(authScreenAtom);
  const onFinish = (values: SingUpInput) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg min-w-96 ">
      <div className="mb-6 text-center">
        <Title level={2} className="text-2xl font-bold mb-2">
          Sign Up
        </Title>
        <Text className="text-gray-600">Welcome</Text>
      </div>
      <Form
        name="signup_form"
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
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-gray-500 mr-2" />}
            placeholder="Password"
            className="w-full h-12 text-lg border-gray-300 rounded-lg"
          />
        </Form.Item>
        <Form.Item
          name="re-password"
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-gray-500 mr-2" />}
            placeholder="Re-Type Password"
            className="w-full h-12 text-lg border-gray-300 rounded-lg"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full h-12">
            Sign Up
          </Button>
          <div className="mt-4 text-center">
            <Text className="text-gray-600">Already have an account?</Text>{" "}
            <Text
              onClick={() => setAuthScreenState("login")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Login
            </Text>
          </div>
          <SocialSignInButtons />
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupForm;
