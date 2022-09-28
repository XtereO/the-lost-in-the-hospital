import { ThemeContext } from "@core/context";
import React, { useContext } from "react";
import styles from "./FooterInfoBlock.scss";

type Props = {
  header: string;
  children: React.ReactNode;
};

export const FooterInfoBlock = React.memo<Props>(({ header, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.footer_info_block} data-testid="footer-info-block">
      <div
        style={{ color: theme.footerInfoBlockHeader }}
        className={styles.footer_info_block__header}
        data-testid="footer-info-block-header"
      >
        {header}
      </div>
      <div data-testid="footer-info-block-details">{children}</div>
    </div>
  );
});
