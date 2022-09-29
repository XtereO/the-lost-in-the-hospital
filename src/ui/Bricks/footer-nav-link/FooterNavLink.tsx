import { ThemeContext } from "@core/context";
import { CustomizedNavLink } from "@ui/bricks/customized-nav-link";
import React, { useContext } from "react";
import styles from "./FooterNavLink.scss";

type Props = {
  to: string;
  children?: React.ReactNode;
};

export const FooterNavLink = React.memo<Props>(({ to, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={styles.footer_nav_link}
      data-testid="footer-nav-link-container"
    >
      <CustomizedNavLink
        fontSize={24}
        to={to}
        color={theme.footer.link}
        activeColor={theme.footer.linkActive}
      >
        {children}
      </CustomizedNavLink>
    </div>
  );
});
