import React from "react";
import styles from "./HeaderIcon.scss";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const HeaderIcon = React.memo<Props>(({ onClick, children }) => {
  return (
    <div
      className={styles.header_icon}
      onClick={onClick}
      data-testid="header-icon"
    >
      {children}
    </div>
  );
});
