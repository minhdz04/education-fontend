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
import { logoutRequest } from "../../redux/auth/actions";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRequest({}));
  };

  const handleMenuClick = (e: { key: string }) => {
    if (e.key === "4") {
      handleLogout();
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
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
        padding: "0 16px",
        background: "#F7F9FB",
        boxShadow: isScrolled ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none",
        transition: "box-shadow 0.3s ease-in-out",
      }}
      className="flex items-center justify-between"
    >
      <div className="flex items-center flex-grow max-w-md">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="rounded-lg w-full"
          style={{
            backgroundColor: theme === "light" ? "white" : "#312E3F",
            color: theme === "light" ? "black" : "white",
          }}
        />
      </div>
      <div className="flex items-center ">
        <Button
          icon={<MessageOutlined />}
          type="text"
          style={{
            color: iconColor,
          }}
        />
        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          trigger={["click"]}
        >
          <Button
            type="text"
            icon={<UserOutlined />}
            style={{
              color: iconColor,
            }}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
