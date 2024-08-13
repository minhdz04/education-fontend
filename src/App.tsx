import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routers";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
