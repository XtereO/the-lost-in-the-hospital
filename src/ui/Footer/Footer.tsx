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
        {text.projects
          .reduce((acc, p) => (acc = [...acc, ...p.products]), [])
          .map((p) => (
            <FooterNavLink key={p.title} to={p.to}>
              {p.title}
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
