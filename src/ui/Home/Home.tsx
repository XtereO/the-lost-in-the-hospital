import React, { useContext } from "react";
import { ThemeContext, LanguageContext } from "../../context";
import styles from "./Home.scss";

export const Home = React.memo(() => {
  const text = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
  return (
    <div data-testid="home">
      <div
        className={styles.banner}
        style={{ backgroundColor: theme.bannerBg }}
        data-testid="banner"
      >
        <div
          className={styles.banner__container}
          data-testid="banner-container"
        >
          <div
            style={{ color: theme.bannerHeader }}
            className={styles.banner__container__header}
            data-testid="banner-container-header"
          >
            {text.brandName}
          </div>
        </div>
      </div>
    </div>
  );
});
