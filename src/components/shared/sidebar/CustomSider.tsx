import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Logo from "./Logo";
import DashBoardMenuList from "./MenuList";
import Sider from "antd/es/layout/Sider";
import { useSiderState } from "../../../hooks/useSiderState";
import { useTheme } from "../../../contexts/ThemeContext";
const CustomSider = ({
  isCollapsed,
  isSmallScreen,
  setIsCollapsed,
  setIsSmallScreen,
}: ReturnType<typeof useSiderState>) => {
  const { theme: themeType, colorBgContainer } = useTheme();
  return (
    <Sider
      className="scrollbar-none shadow-none"
      style={{
        overflow: !isSmallScreen ? "scroll" : "visible",
        zIndex: 2,
        maxHeight: "100vh",
        minHeight: "100vh",
        position: !isCollapsed && isSmallScreen ? "fixed" : "sticky",
        top: 0,
        left: 0,
        background: colorBgContainer,
      }}
      theme={themeType}
      trigger={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={setIsSmallScreen}
      onCollapse={setIsCollapsed}
    >
      <Logo theme={themeType} />
      <DashBoardMenuList />
    </Sider>
  );
};

export default CustomSider;
