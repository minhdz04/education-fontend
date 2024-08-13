import {
  LogoutOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, MenuProps } from "antd";
import { useTheme } from "../../contexts/ThemeContext";
import { useState, useEffect } from "react";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Profile",
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: "Settings",
    icon: <SettingOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "3",
    label: "Help Center",
    icon: <QuestionCircleOutlined />,
  },
  {
    key: "4",
    label: "Logout",
    icon: <LogoutOutlined />,
    danger: true,
  },
];

const AppHeader = () => {
  const { theme, iconColor } = useTheme();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: 0,
        marginTop: 10,
        background: "#F7F9FB",
        boxShadow: isScrolled ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none",
        transition: "box-shadow 0.3s ease-in-out",
      }}
      className="flex items-center justify-between"
    >
      <div className="flex items-center ml-4">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="ml-4 rounded-lg size-10"
          style={{
            width: 300,
            backgroundColor: theme === "light" ? "white" : "#312E3F",
            color: theme === "light" ? "black" : "white",
          }}
        />
      </div>
      <div className="flex items-center mr-4">
        <Button
          icon={<MessageOutlined />}
          type="text"
          style={{
            margin: 0,
            padding: 0,
            border: "none",
            background: "none",
            marginRight: 16,
            color: iconColor,
          }}
        />
        <Dropdown menu={{ items }} trigger={["click"]}>
          {/* <Button
          icon={theme === "light" ? <SunIcon /> : <MoonIcon />}
          type="text"
          style={{
            margin: 0,
            padding: 0,
            border: "none",
            background: "none",
            marginRight: 16,
          }}
          onClick={toggleTheme}
        /> */}
          <Button
            type="text"
            icon={<UserOutlined />}
            style={{
              margin: 0,
              padding: 0,
              border: "none",
              background: "none",
              color: iconColor,
            }}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;

const SunIcon = () => <span>🌞</span>;
const MoonIcon = () => <span>🌜</span>;
