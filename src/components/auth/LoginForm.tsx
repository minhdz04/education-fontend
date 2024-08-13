import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { reduxForm } from "redux-form";
import SocialSignInButtons from "./SocialSignInButtons";
import { useDispatch } from "react-redux";
import { loginRequest, LoginRequestPayload } from "../../redux/auth/actions";

const { Text, Title } = Typography;

interface LoginFormProps {
    error?: string;
}

interface LoginFormData {
    username: string;
    password: string;
}

const LoginForm = () => {
    const dispatch = useDispatch();
    const onSubmit = (values: LoginFormData) => {
        console.log(values);
        const payload: LoginRequestPayload = {
            username: values.username,
            password: values.password,
        };
        dispatch(loginRequest(payload));
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg min-w-96">
            <div className="mb-6 text-center">
                <Title level={2} className="text-2xl font-bold mb-2 ">
                    Login
                </Title>
                <Text className="text-gray-600">Welcome back</Text>
            </div>
            <Form
                name="login_form"
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
                        prefix={<MailOutlined className="text-gray-500 mr-2" />}
                        placeholder="Email"
                        className="w-full h-12 text-lg border-gray-300 rounded-lg "
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
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full h-10 mb-4">
                        Log in
                    </Button>
                    <div className="flex justify-center items-center mb-4">
                        <p
                            className="text-blue-500 hover:underline"
                        >
                            Forgot password?
                        </p>
                    </div>

                    <div className="mt-4 text-center">
                        <Text className="text-gray-600">Don't have an account?</Text>
                        <Text

                            className="text-blue-500 hover:underline cursor-pointer"
                        >
                            Sign up now
                        </Text>
                    </div>
                    <SocialSignInButtons />
                </Form.Item>
            </Form>
        </div>
    );
};

export default reduxForm<LoginFormData, LoginFormProps>({
    form: 'loginForm',
})(LoginForm);



