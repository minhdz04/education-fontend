import { Button, Input, Typography, Form } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../../atoms/authScreenAtom";

const { Title, Text } = Typography;

const VerifyForm = () => {
  const [otp, setOtp] = useState("");
  const setAuthScreenState = useSetRecoilState(authScreenAtom);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  //   const handleContinue = () => {
  //     console.log("Entered OTP: ", otp);
  //   };

  return (
    <div className="flex items-center justify-center p-8 min-w-96">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <MailOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />
        <Title level={2} className="mt-4">
          Password reset
        </Title>
        <Text>
          We sent a code to <strong>amelie@untitledui.com</strong>
        </Text>
        <Form layout="vertical" className="mt-4">
          <div className="flex justify-center mb-4 w-full">
            <Input
              value={otp}
              onChange={handleChange}
              maxLength={4} // Giới hạn số ký tự của mã OTP
              className="text-center"
              style={{ width: "full", height: "50px", fontSize: "24px" }}
              placeholder="Enter OTP"
            />
          </div>
          <Button
            type="primary"
            size="large"
            // onClick={handleContinue}
            className="w-full "
            onClick={() => setAuthScreenState("reset")}
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

export default VerifyForm;
