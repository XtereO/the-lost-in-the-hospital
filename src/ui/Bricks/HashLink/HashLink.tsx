import React, { useCallback, useState } from "react";

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
    const [style, setStyle] = useState({ color, fontSize });
    const handleMouseOver = useCallback(() => {
      setStyle((prev) => ({ ...prev, color: activeColor }));
    }, [activeColor]);
    const handleMouseOut = useCallback(() => {
      setStyle((prev) => ({ ...prev, color }));
    }, [color]);

    const handleClick = useCallback(() => {
      window.location.assign(hash);
    }, [hash]);

    return (
      <span
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={isActive ? { ...style, color: activeColor } : style}
        data-testid="hash-link"
      >
        {children}
      </span>
    );
  }
);
