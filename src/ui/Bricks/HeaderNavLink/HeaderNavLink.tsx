import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../context";
import styles from "./HeaderNavLink.scss";

type Props = {
  to: string;
  children?: React.ReactNode;
};

export const HeaderNavLink = React.memo<Props>(({ to, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.container} data-testid="header-nav-link-container">
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.header_nav_link__active : styles.header_nav_link
        }
        style={({ isActive }) => ({
          color: isActive ? theme.navLinkActive : theme.navLink,
        })}
        data-testid="header-nav-link"
        to={to}
      >
        {children}
      </NavLink>
    </div>
  );
});
