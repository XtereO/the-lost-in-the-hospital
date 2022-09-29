import { ThemeContext } from "@core/context";
import React, { useCallback, useContext, useState } from "react";
import styles from "./CustomizedBtn.scss";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const CustomizedBtn = React.memo<Props>(({ children, onClick }) => {
  const theme = useContext(ThemeContext);
  const [style, setStyle] = useState({
    color: theme.btnLight.color,
    borderColor: theme.btnLight.color,
    backgroundColor: theme.btnLight.background,
  });
  const handleMouseOver = useCallback(() => {
    setStyle({
      color: theme.btnLight.colorActive,
      borderColor: theme.btnLight.colorActive,
      backgroundColor: theme.btnLight.backgroundActive,
    });
  }, []);
  const handleMouseOut = useCallback(() => {
    setStyle({
      color: theme.btnLight.color,
      borderColor: theme.btnLight.color,
      backgroundColor: theme.btnLight.background,
    });
  }, []);
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
