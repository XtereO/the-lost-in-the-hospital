import { ThemeContext } from "@core/context";
import { useMouse } from "@core/hooks";
import React, { useContext } from "react";
import styles from "./CustomizedBtn.scss";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const CustomizedBtn = React.memo<Props>(({ children, onClick }) => {
  const theme = useContext(ThemeContext);
  const { style, handleMouseOut, handleMouseOver } = useMouse({
    defaultStyle: theme.btnLight.default,
    activeStyle: theme.btnLight.active,
  });

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={style}
      className={styles.btn}
      data-testid="btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
});
