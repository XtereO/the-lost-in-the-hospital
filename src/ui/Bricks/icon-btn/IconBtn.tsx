import { ThemeContext } from "@core/context";
import { useMouse } from "@core/hooks";
import React, { useContext } from "react";
import styles from "./IconBtn.scss";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const IconBtn = React.memo<Props>(({ onClick, children }) => {
  const theme = useContext(ThemeContext);
  const { style, handleMouseOut, handleMouseOver } = useMouse({
    defaultStyle: theme.iconBtn.default,
    activeStyle: theme.iconBtn.active,
  });

  return (
    <button
      data-testid="icon-btn"
      style={style}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      className={styles.icon_btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
