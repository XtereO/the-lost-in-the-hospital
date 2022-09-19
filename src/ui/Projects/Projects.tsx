import React, { useContext } from "react";
import { LanguageContext, ThemeContext } from "../../context";
import { NavigationBlock } from "./NavigationBlock";
import styles from "./Projects.scss";

export const Projects = React.memo(() => {
  const theme = useContext(ThemeContext);
  const text = useContext(LanguageContext);
  return (
    <div className={styles.projects} data-testid="projects">
      <div
        className={styles.projects__navigation}
        style={{ borderRightColor: theme.projectsNavigationBorderColor }}
        data-testid="projects-navigation"
      >
        {text.projects.map((p) => (
          <NavigationBlock
            key={p.genre}
            genre={p.genre}
            products={p.products}
          />
        ))}
      </div>
      <div data-testid="projects-content"></div>
      <div data-testid="projects-product-navigation"></div>
    </div>
  );
});
