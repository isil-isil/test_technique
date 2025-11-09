import type { FC } from "react";
import JobCard from "../../components/JobCard/JobCard";
import { useJobs } from "../../hooks/useJobs";
import styles from "./List.module.css";
import Sort from "./Sort/Sort";

const JobList: FC = () => {
  const { jobs, error, setSortBy, setSortOrder, sortBy, sortOrder } = useJobs();

  return (
    <div className={styles.container}>
      {error && <div className={styles.error}>⚠️ {error}</div>}
      {jobs && (
        <>
          <Sort
            setSortBy={setSortBy}
            setSortOrder={setSortOrder}
            sortBy={sortBy}
            sortOrder={sortOrder}
          />
          {jobs.map((job) => (
            <JobCard job={job} key={job.uuid} />
          ))}
        </>
      )}
      {jobs.length === 0 && (
        <div className={styles.noResults}>
          Aucune annonce ne correspond à votre recherche.
        </div>
      )}
    </div>
  );
};

export default JobList;
