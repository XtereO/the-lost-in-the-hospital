import { useMouse } from "@core/hooks";
import React from "react";
import styles from "./CustomizedLink.scss";

type Props = {
  color: string;
  activeColor: string;
  href: string;
  children: React.ReactNode;
};

export const CustomizedLink = React.memo<Props>(
  ({ color, activeColor, href, children }) => {
    const { style, handleMouseOut, handleMouseOver } = useMouse({
      defaultStyle: { color },
      activeStyle: { color: activeColor },
    });

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
