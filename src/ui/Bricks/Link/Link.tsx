import React, { useCallback, useState } from "react";
import styles from "./Link.scss";

type Props = {
  color: string;
  activeColor: string;
  href: string;
  children: React.ReactNode;
};

export const Link = React.memo<Props>(
  ({ color, activeColor, href, children }) => {
    const [style, setStyle] = useState({ color });
    const handleMouseOver = useCallback(() => {
      setStyle({ color: activeColor });
    }, []);
    const handleMouseOut = useCallback(() => {
      setStyle({ color });
    }, []);
    return (
      <div>
        <a
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          target="blank"
          data-testid="link"
          style={style}
          href={href}
          className={styles.link}
        >
          {children}
        </a>
      </div>
    );
  }
);
