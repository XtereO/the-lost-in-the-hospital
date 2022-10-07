import { useMouse } from "@core/hooks";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CustomizedNavLink.scss";

type Props = {
  fontSize: number;
  color: string;
  activeColor: string;
  to: string;
  children: React.ReactNode;
};

export const CustomizedNavLink = React.memo<Props>(
  ({ color, activeColor, to, children, fontSize }) => {
    const { style, handleMouseOut, handleMouseOver } = useMouse({
      defaultStyle: { color },
      activeStyle: { color: activeColor },
    });

    return (
      <div>
        <NavLink
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          data-testid="nav-link"
          style={({ isActive }) =>
            isActive ? { color: activeColor, fontSize } : { ...style, fontSize }
          }
          to={to}
          className={styles.nav_link}
        >
          {children}
        </NavLink>
      </div>
    );
  }
);
