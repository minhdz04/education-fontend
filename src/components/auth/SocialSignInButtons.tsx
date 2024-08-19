import { Button } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const SocialSignInButtons = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex items-center mb-4 w-full">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">or connect with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex justify-center gap-4">
        <Button icon={<FacebookOutlined />} shape="circle" size="large" />
        <Button icon={<GoogleOutlined />} shape="circle" size="large" />
        <Button icon={<GithubOutlined />} shape="circle" size="large" />
      </div>
    </div>
  );
};

export default SocialSignInButtons;
