import { ThemeContext } from "@core/context";
import { CustomizedNavLink } from "@ui/bricks/customized-nav-link";
import React, { useContext } from "react";

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
        color={theme.footer.link}
        activeColor={theme.footer.linkActive}
      >
        {children}
      </CustomizedNavLink>
    </div>
  );
});
