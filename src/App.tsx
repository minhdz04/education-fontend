// src/App.tsx
import React from "react";
import MainRoutes from "./routers"; // Ensure this path is correct
import { App as AntdApp } from "antd";
const App: React.FC = () => {
  return (
    <AntdApp>
      <MainRoutes />
    </AntdApp>
  );
};

export default App;
