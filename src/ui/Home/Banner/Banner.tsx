import { LanguageContext, ThemeContext } from "@core/context";
import { CustomizedBtn } from "@ui/bricks";
import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Banner.scss";

export const Banner = React.memo(() => {
  const text = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleJobClick = useCallback(() => {
    navigate("/job");
  }, []);
  const handleProjectsClick = useCallback(() => {
    navigate(text.projects[0].products[0].to);
  }, []);

  return (
    <div
      className={styles.banner}
      style={{ backgroundColor: theme.banner.background }}
      data-testid="banner"
    >
      <div className={styles.banner__container} data-testid="banner-container">
        <div
          style={{ color: theme.banner.header }}
          className={styles.banner__container__header}
          data-testid="banner-container-header"
        >
          {text.brandName}
        </div>
        <div
          style={{ color: theme.banner.description }}
          className={styles.banner__container__description}
          data-testid="banner-container-description"
        >
          {text.bannerDescription}
        </div>
        <div
          className={styles.banner__container__button_group}
          data-testid="banner-container-button-group"
        >
          <CustomizedBtn onClick={handleProjectsClick}>
            {text.navLinkProjects}
          </CustomizedBtn>
          <CustomizedBtn onClick={handleJobClick}>
            {text.navLinkJob}
          </CustomizedBtn>
        </div>
      </div>
    </div>
  );
});
