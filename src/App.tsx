<<<<<<< HEAD
// src/App.tsx
import React from "react";
import MainRoutes from "./routers"; // Ensure this path is correct
import { App as AntdApp } from "antd";
const App: React.FC = () => {
  return (
    <AntdApp>
      <MainRoutes />
    </AntdApp>
=======
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routers";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
>>>>>>> c87f549 (init project)
  );
};

export default App;
