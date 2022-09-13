import React from "react";
import { Provider, useSelector } from "react-redux";
import { HashRouter } from "react-router-dom";
import { getTheme, getLanguage } from "../bll/main";
import { store } from "../bll/store";
import { LanguageContext, ThemeContext, languages, themes } from "../context";
import { Header } from "./Header";
import styles from "./App.scss";
import { RootRoutes } from "./RootRoutes";
import { Footer } from "./Footer";

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
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
});
