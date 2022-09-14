import React, { useContext } from "react";
import { Link } from "../Link";
import { LanguageContext, ThemeContext } from "../../../context";
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
      style={{ backgroundColor: theme.jobCardBackground }}
    >
      <div
        data-testid="job-card-header"
        className={styles.job_card__header}
        style={{ color: theme.jobCardHeader }}
      >
        {header}
      </div>
      <div
        data-testid="job-card-description"
        className={styles.job_card__description}
        style={{ color: theme.jobCardText }}
      >
        {description}
      </div>
      <div data-testid="job-card-links" className={styles.job_card__links}>
        {text.contacts.map((t) => (
          <Link
            color={theme.jobCardLink}
            activeColor={theme.jobCardLinkActive}
            href={t.href}
            key={t.title}
          >
            {t.title}
          </Link>
        ))}
      </div>
    </div>
  );
});
