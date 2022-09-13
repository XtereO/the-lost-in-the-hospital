import React, { useContext } from "react";
import { FooterInfoBlock, FooterNavLink } from "../Bricks";
import { LanguageContext, ThemeContext } from "../../context";
import styles from "./Footer.scss";
import brandLogo from "../../assets/brand-logo.webp";

export const Footer = React.memo(() => {
  const text = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: theme.footer }}
      className={styles.footer}
      data-testid="footer"
    >
      <FooterInfoBlock header={text.brandName}>
        <img src={brandLogo} data-testid="brand-logo" />
      </FooterInfoBlock>
      <FooterInfoBlock header={text.navLinkProjects}>
        {text.projects.map((t) => (
          <FooterNavLink key={t.link} to={t.link}>
            {t.title}
          </FooterNavLink>
        ))}
      </FooterInfoBlock>
      <FooterInfoBlock header={text.footerSocTopic}>
        {text.contacts.map((t) => (
          <FooterNavLink key={t.title} to={t.link} isLink>
            {t.title}
          </FooterNavLink>
        ))}
      </FooterInfoBlock>
    </div>
  );
});
