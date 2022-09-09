import React, { useContext } from "react";
import { HeaderNavLink, HeaderIcon } from "../Bricks";
import { LanguageContext, ThemeContext } from "../../context";
import styles from "./Header.scss";
import { LanguageIcon, MoonIcon, SunIcon } from "../Icons";
import { useSelector } from "react-redux";
import { getTheme } from "../../bll/main";

export const Header = React.memo(() => {
  const themeType = useSelector(getTheme);
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
      <div className={styles.header__settings} data-testid="header-settings">
        <HeaderIcon onClick={() => {}}>
          {themeType === "light" ? <MoonIcon /> : <SunIcon />}
        </HeaderIcon>
        <HeaderIcon onClick={() => {}}>
          <LanguageIcon />
        </HeaderIcon>
      </div>
    </div>
  );
});
