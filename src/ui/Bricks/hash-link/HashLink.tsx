import { useMouse } from "@core/hooks";
import React, { useCallback } from "react";
import styles from "./HashLink.scss";

type Props = {
  isActive?: boolean;
  hash: string;
  fontSize: number;
  color: string;
  activeColor: string;
  children: React.ReactNode;
};

export const HashLink = React.memo<Props>(
  ({ hash, isActive, fontSize, color, activeColor, children }) => {
    const { style, handleMouseOver, handleMouseOut } = useMouse({
      defaultStyle: { color },
      activeStyle: { color: activeColor },
    });

    const handleClick = useCallback(() => {
      history.pushState(null, null, `#${hash}`);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }, [hash]);

    return (
      <span
        className={styles.hash_link}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={
          isActive
            ? { ...style, color: activeColor, fontSize }
            : { ...style, fontSize }
        }
        data-testid="hash-link"
      >
        {children}
      </span>
    );
  }
);
