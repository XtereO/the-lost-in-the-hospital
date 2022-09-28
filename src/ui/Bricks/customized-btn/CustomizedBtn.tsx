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
    color: theme.btnLight,
    borderColor: theme.btnLight,
    backgroundColor: theme.btnLightBackground,
  });
  const handleMouseOver = useCallback(() => {
    setStyle({
      color: theme.btnLightActive,
      borderColor: theme.btnLightActive,
      backgroundColor: theme.btnLightActiveBackground,
    });
  }, []);
  const handleMouseOut = useCallback(() => {
    setStyle({
      color: theme.btnLight,
      borderColor: theme.btnLight,
      backgroundColor: theme.btnLightBackground,
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
