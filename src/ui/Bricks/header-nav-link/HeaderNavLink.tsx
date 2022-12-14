import { ThemeContext } from "@core/context";
import { CustomizedNavLink } from "@ui/bricks/customized-nav-link";
import React, { useContext } from "react";
import styles from "./HeaderNavLink.scss";

type Props = {
  to: string;
  children?: React.ReactNode;
};

export const HeaderNavLink = React.memo<Props>(({ to, children }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={styles.container} data-testid="header-nav-link-container">
      <CustomizedNavLink
        color={theme.header.navLink.default}
        activeColor={theme.header.navLink.active}
        fontSize={22}
        to={to}
      >
        {children}
      </CustomizedNavLink>
    </div>
  );
});
