import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import AppHeader from "../components/shared/header";
import { useSiderState } from "../hooks/useSiderState";
import CustomSider from "../components/shared/sidebar/CustomSider";

const MainPage = () => {
  const { isCollapsed, isSmallScreen, setIsCollapsed, setIsSmallScreen } =
    useSiderState();

=======
import AppHeader from "../components/header";
import BreadcrumbComponent from "../components/header/BreadcrumbComponent";
import CustomSider from "../components/sidebar/CustomSider";
import { useSiderState } from "../hooks/useSiderState";

interface Props {
  auth: boolean;
}
const MainPage = ({ auth }: Props) => {
  const { isCollapsed, isSmallScreen, setIsCollapsed, setIsSmallScreen } =
    useSiderState();

  if (!auth) return <div>You need to login</div>;
>>>>>>> c87f549 (init project)
  const contentStyle: CSSProperties = {
    opacity: !isCollapsed && isSmallScreen ? 0.5 : 1,
    pointerEvents: !isCollapsed && isSmallScreen ? "none" : "auto",
    transition: "opacity 0.3s ease",
    minHeight: 360,
<<<<<<< HEAD
  };

  return (
    <Layout style={{ minHeight: "100vh" }} className="flex">
=======
    margin: "0 24px",
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
>>>>>>> c87f549 (init project)
      <CustomSider
        isCollapsed={isCollapsed}
        isSmallScreen={isSmallScreen}
        setIsCollapsed={setIsCollapsed}
        setIsSmallScreen={setIsSmallScreen}
      />
<<<<<<< HEAD
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
          {/* <BreadcrumbComponent /> */}
          <div
            style={{
              padding: "24px",
=======
      <Layout style={{ background: "#F7F9FB" }}>
        <AppHeader />
        <Content className="rounded-lg" style={contentStyle}>
          <BreadcrumbComponent />
          <div
            style={{
              padding: "12px 24px",
>>>>>>> c87f549 (init project)
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
