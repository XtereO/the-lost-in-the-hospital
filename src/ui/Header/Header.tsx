import { LanguageContext, ThemeContext } from "@core/context";
import { getTheme } from "@core/modules/main";
import { HeaderIcon, HeaderNavLink } from "@ui/bricks";
import { LanguageIcon, MoonIcon, SunIcon } from "@ui/icons";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Header.scss";

export const Header = React.memo(() => {
  const themeType = useSelector(getTheme);
  const theme = useContext(ThemeContext);
  const text = useContext(LanguageContext);

  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const handleScroll = useCallback(() => {
    let moving = window.pageYOffset;
    setVisible(position > moving);
    setPosition(moving);
  }, [position]);
  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={styles.header}
      style={{ backgroundColor: theme.header.background, opacity: +visible }}
      data-testid="header"
    >
      <div className={styles.header__nav_links} data-testid="header-nav-links">
        <HeaderNavLink to="/home">{text.navLinkHome}</HeaderNavLink>
        <HeaderNavLink to={text.projects[0].products[0].to}>
          {text.navLinkProjects}
        </HeaderNavLink>
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
