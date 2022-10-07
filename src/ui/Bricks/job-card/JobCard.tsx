import { LanguageContext, ThemeContext } from "@core/context";
import { CustomizedLink } from "@ui/bricks/customized-link";
import React, { useContext } from "react";
import styles from "./JobCard.scss";

type Props = {
  header: string;
  description: string;
};

export const JobCard = React.memo<Props>(({ header, description }) => {
  const theme = useContext(ThemeContext);
  const text = useContext(LanguageContext);

  return (
    <div
      data-testid="job-card"
      className={styles.job_card}
      style={{ backgroundColor: theme.job.cardBackground }}
    >
      <div
        data-testid="job-card-header"
        className={styles.job_card__header}
        style={{ color: theme.job.cardHeader }}
      >
        {header}
      </div>
      <div
        data-testid="job-card-description"
        className={styles.job_card__description}
        style={{ color: theme.job.cardText }}
      >
        {description}
      </div>
      <div data-testid="job-card-links" className={styles.job_card__links}>
        {text.contacts.map((t) => (
          <CustomizedLink
            color={theme.job.cardLink.default}
            activeColor={theme.job.cardLink.active}
            href={t.href}
            key={t.title}
          >
            {t.title}
          </CustomizedLink>
        ))}
      </div>
    </div>
  );
});
