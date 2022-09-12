import React, { useCallback, useContext } from "react";
import { Button } from "../../Bricks";
import { ThemeContext, LanguageContext } from "../../../context";
import styles from "./Banner.scss";
import { useNavigate } from "react-router-dom";

export const Banner = React.memo(() => {
  const text = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleJobClick = useCallback(() => {
    navigate("/job");
  }, []);
  const handleProjectsClick = useCallback(() => {
    navigate("/projects");
  }, []);
  return (
    <div
      className={styles.banner}
      style={{ backgroundColor: theme.bannerBg }}
      data-testid="banner"
    >
      <div className={styles.banner__container} data-testid="banner-container">
        <div
          style={{ color: theme.bannerHeader }}
          className={styles.banner__container__header}
          data-testid="banner-container-header"
        >
          {text.brandName}
        </div>
        <div
          style={{ color: theme.bannerDescription }}
          className={styles.banner__container__description}
          data-testid="banner-container-description"
        >
          {text.bannerDescription}
        </div>
        <div
          className={styles.banner__container__button_group}
          data-testid="banner-container-button-group"
        >
          <Button onClick={handleProjectsClick}>{text.navLinkProjects}</Button>
          <Button onClick={handleJobClick}>{text.navLinkJob}</Button>
        </div>
      </div>
    </div>
  );
});
