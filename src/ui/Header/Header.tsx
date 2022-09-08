import React, { useContext } from "react";
import { HeaderNavLink } from "../Bricks/HeaderNavLink";
import { LanguageContext, ThemeContext } from "../../context";
import styles from "./Header.scss";

export const Header = React.memo(() => {
  const theme = useContext(ThemeContext);
  const text = useContext(LanguageContext);
  return (
    <div
      className={styles.header}
      style={{ backgroundColor: theme.header }}
      data-testid="header"
    >
      <div className={styles.header__nav_links} data-testid="header-nav-links">
        <HeaderNavLink to="/home">{text.navLinkHome}</HeaderNavLink>
        <HeaderNavLink to="/projects">{text.navLinkProjects}</HeaderNavLink>
        <HeaderNavLink to="/job">{text.navLinkJob}</HeaderNavLink>
      </div>
      <div
        className={styles.header__settings}
        data-testid="header-settings"
      ></div>
    </div>
  );
});
