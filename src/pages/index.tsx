import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/header";
import BreadcrumbComponent from "../components/header/BreadcrumbComponent";
import CustomSider from "../components/sidebar/CustomSider";
import { useSiderState } from "../hooks/useSiderState";

const MainPage = () => {
  const { isCollapsed, isSmallScreen, setIsCollapsed, setIsSmallScreen } =
    useSiderState();

  const contentStyle: CSSProperties = {
    opacity: !isCollapsed && isSmallScreen ? 0.5 : 1,
    pointerEvents: !isCollapsed && isSmallScreen ? "none" : "auto",
    transition: "opacity 0.3s ease",
    minHeight: 360,
  };

  return (
    <Layout style={{ minHeight: "100vh" }} className="flex">
      <CustomSider
        isCollapsed={isCollapsed}
        isSmallScreen={isSmallScreen}
        setIsCollapsed={setIsCollapsed}
        setIsSmallScreen={setIsSmallScreen}
      />
      <Layout
        style={{
          background: "#F7F9FB",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppHeader />
        <Content className="rounded-lg" style={contentStyle}>
          <BreadcrumbComponent />
          <div
            style={{
              padding: "24px",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainPage;
