import React, { useState } from "react";
import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "./app-configs/themeConfig";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const curThemeName = localStorage.getItem("appTheme") || "light";

  const [themeType, setThemeType] = useState(curThemeName);

  const setThemeName = (themeName) => {
    localStorage.setItem("appTheme", themeName);
    setThemeType(themeName);
  };

  const theme = getTheme({
    paletteType: themeType,
  });

  return (
    <ThemeContext.Provider value={{ setThemeName, curThemeName }}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppRoutes />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
