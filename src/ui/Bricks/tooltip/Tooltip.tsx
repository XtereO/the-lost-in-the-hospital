import { ThemeContext } from "@core/context";
import React, { useContext } from "react";
import styles from "./Tooltip.scss";

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const Tooltip = React.memo<Props>(({ isOpen, children }) => {
  const theme = useContext(ThemeContext);
  if (!isOpen) {
    return null;
  }
  return (
    <div
      style={{
        background: theme.tooltip.background,
        borderColor: theme.tooltip.borderColor,
      }}
      className={styles.tooltip}
      data-testid="tooltip"
    >
      {children}
    </div>
  );
});
