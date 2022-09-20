import React from "react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getLanguage, getTheme } from "../bll/main";
import { store } from "../bll/store";
import { LanguageContext, languages, ThemeContext, themes } from "../context";
import styles from "./App.scss";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { RootRoutes } from "./RootRoutes";

const App = React.memo(() => {
  const theme = useSelector(getTheme);
  const language = useSelector(getLanguage);
  return (
    <div
      className={styles.app}
      style={{ backgroundColor: themes[theme].appBg }}
      data-testid="app"
    >
      <ThemeContext.Provider value={themes[theme]}>
        <LanguageContext.Provider value={languages[language]}>
          <Header />
          <RootRoutes />
          <Footer />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
});

export const AppContainer = React.memo(() => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
});
