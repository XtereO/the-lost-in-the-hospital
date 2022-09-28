import { ThemeContext } from "@core/context";
import React, { useContext } from "react";
import styles from "./InfoBlock.scss";

type Props = {
  header: string;
  description: string;
};

export const InfoBlock = React.memo<Props>(({ header, description }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.info_block} data-testid="info-block">
      <div
        style={{ color: theme.infoBlockHeader }}
        className={styles.info_block__header}
        data-testid="info-block-header"
      >
        {header}
      </div>
      <div
        style={{ color: theme.infoBlockDescription }}
        className={styles.info_block__description}
        data-testid="info-block-description"
      >
        {description}
      </div>
    </div>
  );
});
