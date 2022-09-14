import React, { useCallback, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../context";
import styles from "./FooterNavLink.scss";

type Props = {
  to: string;
  children?: React.ReactNode;
};

export const FooterNavLink = React.memo<Props>(({ to, children }) => {
  const theme = useContext(ThemeContext);
  const [style, setStyle] = useState({ color: theme.footerLink });
  const handleMouseOver = useCallback(() => {
    setStyle({ color: theme.footerLinkActive });
  }, []);
  const handleMouseOut = useCallback(() => {
    setStyle({ color: theme.footerLink });
  }, []);
  return (
    <div data-testid="footer-nav-link-container">
      <NavLink
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={styles.footer_nav_link}
        style={({ isActive }) => ({
          color: isActive ? theme.footerLinkActive : style.color,
        })}
        data-testid="footer-nav-link"
        to={to}
      >
        {children}
      </NavLink>
    </div>
  );
});
