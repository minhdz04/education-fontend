import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import "./index.css";
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
