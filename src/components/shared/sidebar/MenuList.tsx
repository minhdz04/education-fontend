import { HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { FaChalkboardTeacher, FaRegUser } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../../contexts/ThemeContext";

const DashBoardMenuList = () => {
  const { theme, colorBgContainer } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (key: string) => {
    switch (key) {
      case "signin":
        navigate("/auth/login");
        break;
      case "signup":
        navigate("/auth/signup");
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
    { key: "users", icon: <FaRegUser />, label: "Users" },
    { key: "teachers", icon: <FaChalkboardTeacher />, label: "Teachers" },
    { key: "classes", icon: <SiGoogleclassroom />, label: "Classes" },
    //{ key: "schedule", icon: <SiGoogleclassroom />, label: "Schedule" },

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
        className="flex text-lg from-inherit flex-col mt-2 overflow-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"
      />
    </div>
  );
};

export default DashBoardMenuList;
