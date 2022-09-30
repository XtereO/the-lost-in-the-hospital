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
import React, { UIEvent, useCallback, useState } from "react";
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

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const scrollHandler = useCallback(
    (e: UIEvent<HTMLDivElement>) => {
      const curScrollPos = e.currentTarget.clientTop;
      console.log(curScrollPos, prevScrollPos);
      if (curScrollPos - prevScrollPos > 0) {
      } else {
      }
      setPrevScrollPos(curScrollPos);
    },
    [prevScrollPos]
  );

  return (
    <div
      onScroll={scrollHandler}
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
