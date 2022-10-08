import { LanguageContext, ThemeContext } from "@core/context";
import { useEventListener } from "@core/hooks";
import { Language, languages } from "@core/models";
import { getLanguage, getTheme, mainActions } from "@core/modules/main";
import { HeaderIcon, HeaderNavLink, Tooltip, TouchableDiv } from "@ui/bricks";
import { LanguageIcon, MoonIcon, SunIcon } from "@ui/icons";
import React, { useCallback, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.scss";

export const Header = React.memo(() => {
  const dispatch = useDispatch();
  const themeType = useSelector(getTheme);
  const langType = useSelector(getLanguage);
  const theme = useContext(ThemeContext);
  const text = useContext(LanguageContext);

  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const handleScroll = useCallback(() => {
    let moving = window.pageYOffset;
    setVisible(position > moving);
    setPosition(moving);
  }, [position]);
  useEventListener("scroll", handleScroll);

  const handleSwitchTheme = useCallback(() => {
    if (themeType === "light") {
      dispatch(mainActions.setTheme("dark"));
    } else {
      dispatch(mainActions.setTheme("light"));
    }
  }, [themeType]);

  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const handleSwitchTooltip = useCallback(() => {
    console.log(isTooltipOpen);
    setTooltipOpen(!isTooltipOpen);
  }, [isTooltipOpen, setTooltipOpen]);
  const changeLanguage = useCallback(
    (lang: Language) => () => {
      dispatch(mainActions.setLanguage(lang));
    },
    []
  );
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
        <HeaderIcon onClick={handleSwitchTheme}>
          {themeType === "light" ? <MoonIcon /> : <SunIcon />}
        </HeaderIcon>
        <HeaderIcon onClick={handleSwitchTooltip}>
          <LanguageIcon />
          <Tooltip isOpen={isTooltipOpen}>
            {Object.keys(languages).map((key: Language) => (
              <TouchableDiv
                key={key}
                onClick={changeLanguage(key)}
                className={styles.header__settings__lang_option}
                isActive={langType === key}
              >
                {languages[key]}
              </TouchableDiv>
            ))}
          </Tooltip>
        </HeaderIcon>
      </div>
    </div>
  );
});
