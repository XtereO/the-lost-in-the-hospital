import React, { useCallback, useState } from "react";
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
    const [style, setStyle] = useState({ color, fontSize });
    const handleMouseOver = useCallback(() => {
      setStyle((prev) => ({ ...prev, color: activeColor }));
    }, []);
    const handleMouseOut = useCallback(() => {
      setStyle((prev) => ({ ...prev, color }));
    }, []);
    return (
      <div>
        <NavLink
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          target="blank"
          data-testid="nav-link"
          style={({ isActive }) =>
            isActive ? { color: activeColor, fontSize } : style
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
