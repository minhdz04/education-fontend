import { FireFilled } from "@ant-design/icons";
import { MenuTheme } from "antd";
interface Props {
  theme: MenuTheme;
}
const Logo = ({ theme }: Props) => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="flex items-center justify-center">
        <FireFilled
          style={{
            color: theme === "light" ? "black" : "white",
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
