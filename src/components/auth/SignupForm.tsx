import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  registerRequest,
  RegisterRequestPayload,
} from "../../redux/auth/actions";
import { RootState } from "../../redux/store";
import SocialSignInButtons from "./SocialSignInButtons";

const { Text, Title } = Typography;

interface SignUpData {
  username: string;
  password: string;
  rePassword: string;
}

const SignupForm = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (authState.isRegisteSuccess) {
      navigate("/");
    }
  }, [authState.isAuthenticated, navigate]);

  const generateRandomName = (length: number): string => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    const lettersLength = letters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * lettersLength);
      result += letters[randomIndex];
    }

    return result;
  };

  const onSubmit = (values: SignUpData) => {
    const name = generateRandomName(3);
    const email = `${name}@gmail.com`;
    const payload: RegisterRequestPayload = {
      username: values.username,
      password: values.password,
      re_password: values.rePassword,
      name: name,
      email: email,
    };
    console.log(payload);
    dispatch(registerRequest(payload));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
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
        onFinish={onSubmit}
        layout="vertical"
        requiredMark="optional"
      >
        <Form.Item
          name="username"
          rules={[
            {
              type: "string",
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="text-gray-500 mr-2" />}
            placeholder="Username"
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
          name="rePassword"
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
                  new Error("The two passwords do not match!"),
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
            <Link
              to={"/auth/login"}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Login
            </Link>
          </div>
          <SocialSignInButtons />
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupForm;
