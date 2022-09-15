import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Link.scss";

type Props = {
  color: string;
  activeColor: string;
  to: string;
  children: React.ReactNode;
};

export const CustomizedNavLink = React.memo<Props>(
  ({ color, activeColor, to, children }) => {
    const [style, setStyle] = useState({ color });
    const handleMouseOver = useCallback(() => {
      setStyle({ color: activeColor });
    }, []);
    const handleMouseOut = useCallback(() => {
      setStyle({ color });
    }, []);
    return (
      <div>
        <NavLink
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          target="blank"
          data-testid="link"
          style={style}
          to={to}
          className={styles.nav_link}
        >
          {children}
        </NavLink>
      </div>
    );
  }
);
