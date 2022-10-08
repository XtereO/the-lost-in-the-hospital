import { ThemeContext } from "@core/context";
import { useMouse } from "@core/hooks";
import React, { useContext } from "react";

type Props = {
  className: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const TouchableDiv = React.memo<Props>(
  ({ isActive, onClick, className, children }) => {
    const theme = useContext(ThemeContext);
    const { style, handleMouseOut, handleMouseOver } = useMouse({
      defaultStyle: theme.touchableDiv.default,
      activeStyle: theme.touchableDiv.active,
    });
    return (
      <div
        className={className}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        style={isActive ? { color: theme.touchableDiv.active.color } : style}
        onClick={onClick}
        data-testid="touchable-div"
      >
        {children}
      </div>
    );
  }
);
