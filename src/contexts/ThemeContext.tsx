// ThemeContext.js
import { ConfigProvider } from "antd";
import { createContext, ReactNode, useContext, useState } from "react";

// Tạo một kiểu cho context value
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  colorBgContainer: string;
  iconColor: string;
  textColor: string;
}

// Cung cấp giá trị mặc định cho context
const defaultContextValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
  colorBgContainer: "#F7F9FB",
  iconColor: "black",
  textColor: "black",
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light"); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const antdTheme =
    theme === "light"
      ? {
          token: {
            colorPrimary: "#1890ff", // Primary color for light theme
            colorBgContainer: "#ffffff", // Background color for containers in light theme
          },
        }
      : {
          token: {
            colorPrimary: "#4493F8", // Primary color for dark theme
            colorBgContainer: "#010409", // Background color for containers in dark theme
          },
        };

  // Return context provider with the theme and background color
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        colorBgContainer: antdTheme.token.colorBgContainer,
        iconColor: theme === "light" ? "black" : "white",
        textColor: theme === "light" ? "black" : "white",
      }}
    >
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use context
export const useTheme = () => useContext(ThemeContext);
