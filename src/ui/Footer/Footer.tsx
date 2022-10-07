import brandLogo from "@assets/images/brand-logo.webp";
import { LanguageContext, ThemeContext } from "@core/context";
import { CustomizedLink, FooterInfoBlock, FooterNavLink } from "@ui/bricks";
import React, { useContext } from "react";
import styles from "./Footer.scss";

export const Footer = React.memo(() => {
  const text = useContext(LanguageContext);
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ backgroundColor: theme.footer.background }}
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
          <CustomizedLink
            key={t.title}
            href={t.href}
            color={theme.footer.link.default}
            activeColor={theme.footer.link.active}
          >
            {t.title}
          </CustomizedLink>
        ))}
      </FooterInfoBlock>
    </div>
  );
});
