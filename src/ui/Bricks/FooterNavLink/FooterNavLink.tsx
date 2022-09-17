import React, { useContext } from "react";
import { CustomizedNavLink } from "../CustomizedNavLink";
import { ThemeContext } from "../../../context";

type Props = {
  to: string;
  children?: React.ReactNode;
};

export const FooterNavLink = React.memo<Props>(({ to, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <div data-testid="footer-nav-link-container">
      <CustomizedNavLink
        fontSize={24}
        to={to}
        color={theme.footerLink}
        activeColor={theme.footerLinkActive}
      >
        {children}
      </CustomizedNavLink>
    </div>
  );
});
