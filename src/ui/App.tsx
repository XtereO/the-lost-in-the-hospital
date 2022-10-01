import {
  LanguageContext,
  languages,
  ThemeContext,
  themes,
} from "@core/context";
import { getLanguage, getTheme } from "@core/modules/main";
import { store } from "@core/store";
import { Footer } from "@ui/footer";
import { Header } from "@ui/header";
import { RootRoutes } from "@ui/root-routes";
import React from "react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.scss";

export const AppContainer = React.memo(() => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
});

const App = React.memo(() => {
  const theme = useSelector(getTheme);
  const language = useSelector(getLanguage);

  return (
    <div
      className={styles.app}
      style={{ backgroundColor: themes[theme].app.background }}
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
