import cn from "classnames";
import type { FC } from "react";
import { formatDate } from "../../../../utils/formatDate";
import type { Job } from "../../hooks/useJobs";
import styles from "./JobCard.module.css";

interface JobCardProps {
  job: Job;
}

const JobCard: FC<JobCardProps> = ({ job }) => {
  return (
    <article className={styles.container}>
      <div className={styles.infos}>
        <div className={styles.title}>{job.title}</div>
        <div className={cn(styles.badge, styles[job.category])}>
          {job.category}
        </div>
        <div className={cn(styles.badge, styles[job.type])}>{job.type}</div>
        <div className={styles.salary}>{job.salary}€</div>
        <div>crée le {formatDate(job.createdAt)}</div>
      </div>
    </article>
  );
};

export default JobCard;
