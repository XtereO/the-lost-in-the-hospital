import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../context";
import styles from "./FooterNavLink.scss";

type Props = {
  to: string;
  isLink?: boolean;
  children?: React.ReactNode;
};

export const FooterNavLink = React.memo<Props>(({ to, isLink, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <div data-testid="footer-nav-link-container">
      {!isLink ? (
        <NavLink
          className={styles.footer_nav_link}
          style={{ color: theme.footerLink }}
          data-testid="footer-nav-link"
          to={to}
        >
          {children}
        </NavLink>
      ) : (
        <a
          target="blank"
          data-testid="footer-link"
          style={{ color: theme.footerLink }}
          href={to}
          className={styles.footer_nav_link}
        >
          {children}
        </a>
      )}
    </div>
  );
});
