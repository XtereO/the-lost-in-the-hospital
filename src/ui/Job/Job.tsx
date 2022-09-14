import React, { useContext } from "react";
import { JobCard } from "../Bricks";
import { LanguageContext } from "../../context";
import styles from "./Job.scss";

export const Job = React.memo(() => {
  const text = useContext(LanguageContext);
  return (
    <div className={styles.job} data-testid="job">
      <div className={styles.job__header} data-testid="job-header">
        Если хотите в нашу команду, то обращайтесь в удобную для вас соцсеть:
      </div>
      <div className={styles.job__cards} data-testid="job-cards">
        {text.jobs.map((t) => (
          <JobCard key={t.header} {...t} />
        ))}
      </div>
    </div>
  );
});
