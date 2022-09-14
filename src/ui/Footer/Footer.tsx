import React, { useContext } from "react";
import { FooterInfoBlock, FooterNavLink, Link } from "../Bricks";
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
          <FooterNavLink key={t.title} to={t.to}>
            {t.title}
          </FooterNavLink>
        ))}
      </FooterInfoBlock>
      <FooterInfoBlock header={text.footerSocTopic}>
        {text.contacts.map((t) => (
          <Link
            key={t.title}
            href={t.href}
            color={theme.footerLink}
            activeColor={theme.footerLinkActive}
          >
            {t.title}
          </Link>
        ))}
      </FooterInfoBlock>
    </div>
  );
});
