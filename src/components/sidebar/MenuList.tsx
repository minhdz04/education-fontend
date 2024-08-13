import {
  BranchesOutlined,
  BugOutlined,
  HomeOutlined,
  IdcardOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { useNavigate, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../../atoms/authScreenAtom";
import { useTheme } from "../../contexts/ThemeContext";

const DashBoardMenuList = () => {
  const { theme, colorBgContainer } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const setAuthScreenState = useSetRecoilState(authScreenAtom);

  const handleMenuClick = (key: string) => {
    switch (key) {
      case "signin":
        setAuthScreenState("login");
        navigate("/auth");
        break;
      case "signup":
        setAuthScreenState("signup");
        navigate("/auth");
        break;
      case "verifyMail":
        setAuthScreenState("verify");
        navigate("/auth");
        break;
      case "forgotPass":
        setAuthScreenState("forgotPass");
        navigate("/auth");
        break;
      case "dashboards":
        navigate("/");
        break;
      default:
        navigate(`/${key}`);
        break;
    }
  };

  // Determine the selected key based on the current URL
  const selectedKey = location.pathname.slice(1) || "dashboards"; // Default to "dashboards" if pathname is empty

  const menuItems: ItemType<MenuItemType>[] = [
    { key: "dashboards", icon: <HomeOutlined />, label: "Dashboards" },
    { key: "ai-employee", icon: <BranchesOutlined />, label: "AI Employee" },
    { key: "employee", icon: <BranchesOutlined />, label: "Employee" },
    { key: "user", icon: <BranchesOutlined />, label: "User" },


    // { key: "group-pages", type: "group", label: "Pages" },
    // {
    //   key: "corporate",
    //   icon: <IdcardOutlined />,
    //   label: "Corporate",
    //   children: [
    //     { key: "task-1", label: "Task 1" },
    //     { key: "task-2", label: "Task 2" },
    //   ],
    // },
    {
      key: "authentication",
      icon: <LockOutlined />,
      label: "Authentication",
      children: [
        { key: "signin", label: "Sign In" },
        { key: "signup", label: "Sign Up" },
        { key: "verifyMail", label: "Verify Mail" },
        { key: "forgotPass", label: "Forgot Pass" },
      ],
    },
    {
      key: "error",
      icon: <BugOutlined />,
      label: "Error Page",
    },
    // { key: "userProfile", icon: <UserOutlined />, label: "User Profile" }, 
  ];

  return (
    <div>
      <Menu
        items={menuItems}
        selectedKeys={[selectedKey]}
        defaultSelectedKeys={["dashboards"]}
        theme={theme}
        mode="inline"
        onClick={({ key }) => handleMenuClick(key)}
        style={{
          background: colorBgContainer,
        }}
        className="flex flex-col mt-2 overflow-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"
      />
    </div>
  );
};

export default DashBoardMenuList;
